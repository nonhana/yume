import type { IPostMetaData, ITag, Post } from '@/types/post'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return matter(rawContent)
}

function getMDXData(dir: string): Post[] {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata: metadata as IPostMetaData,
      slug,
      content,
    }
  })
}

const fullPath = path.join(process.cwd(), 'contents')

export function getAllPosts(): Post[] {
  return getMDXData(fullPath)
}

export function getAllTags(): ITag[] {
  const posts = getAllPosts()
  const tags: ITag[] = []
  posts.forEach((post) => {
    if (post.metadata.published) {
      post.metadata.tags?.forEach((tag) => {
        const existingTag = tags.find(t => t.name === tag)
        if (existingTag) {
          existingTag.count++
        }
        else {
          tags.push({ name: tag, count: 1 })
        }
      })
    }
  })
  return tags
}

function getCategoryPosts(category: string): Post[] {
  switch (category) {
    case 'blog':
      return getAllPosts().filter(post => post.metadata.category === 'blog')
    case 'think':
      return getAllPosts().filter(post => post.metadata.category === 'think')
    default:
      return getAllPosts()
  }
}

const DEFAULT_POSTS_PER_PAGE = 5

export function getLatestPosts(category: string, num: number = DEFAULT_POSTS_PER_PAGE): Post[] {
  const posts = getCategoryPosts(category)
  const sortPosts = (posts: Post[]) =>
    posts.sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt)
      const dateB = new Date(b.metadata.publishedAt)
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
    })
  return sortPosts(posts).slice(0, num)
}

export function getBlogSlugs(): string[] {
  return getAllPosts()
    .filter(post => post.metadata.category === 'blog')
    .map(post => post.slug)
}

export function sortTagsByCount(tags: ITag[]): string[] {
  return tags.sort((a, b) => b.count - a.count).map(tag => tag.name)
}

export function getPostsByTagSlug(posts: Post[], tag: string): Post[] {
  return posts.filter((post) => {
    return post.metadata.tags?.includes(tag) || false
  })
}
