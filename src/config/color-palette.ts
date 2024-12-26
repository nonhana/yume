export const COLORS = {

  // 略暖的白色
  white: 'hsl(0, 100%, 100%)',
  // 降低对比，实际上是深灰
  black: 'hsl(0, 2%, 11%)',

  // 明三度 暗三度的蓝灰
  gray: {
    100: 'hsl(210, 30%, 95%)',
    200: 'hsl(213, 25%, 85%)',
    300: 'hsl(215, 20%, 75%)',
    400: 'hsl(216, 18%, 55%)',
    500: 'hsl(218, 15%, 40%)',
    600: 'hsl(220, 12%, 25%)',
  },

  blue: {
    light: 'hsl(201, 100%, 94%)',
    dark: 'hsl(199, 89%, 48%)',
    lsc: 'hsl(224, 68%, 33%)',
  },

  cyan: {
    light: 'hsl(188, 60%, 65%)',
    dark: 'hsl(188,86%,53%)',
  },

  red: {
    light: 'hsl(0, 84.2%, 60.2%)',
    dark: 'hsl(0, 62.8%, 30.6%)',
  },

} as const

const shadcnCssVariableHsl = {
  ':root': {
    '--background': COLORS.white,
    '--foreground': COLORS.black,
    '--card': COLORS.gray[200],
    '--card-foreground': COLORS.black,
    '--popover': COLORS.white,
    '--popover-foreground': COLORS.black,
    '--primary': COLORS.blue.dark,
    '--primary-foreground': COLORS.gray[100],
    '--secondary': COLORS.gray[100],
    '--secondary-foreground': COLORS.gray[600],
    '--muted': COLORS.gray[300],
    '--muted-foreground': COLORS.gray[500],
    '--accent': COLORS.cyan.dark,
    '--accent-foreground': COLORS.gray[600],
    '--destructive': COLORS.red.light,
    '--destructive-foreground': COLORS.gray[100],
    '--border': COLORS.gray[200],
    '--input': COLORS.gray[200],
    '--ring': COLORS.blue.dark,

    // default
    '--chart-1': 'hsl(12, 76%, 61%)',
    '--chart-2': 'hsl(173, 58%, 39%)',
    '--chart-3': 'hsl(197, 37%, 24%)',
    '--chart-4': 'hsl(43, 74%, 66%)',
    '--chart-5': 'hsl(27, 87%, 67%)',
    '--radius': '0.5rem',
  },
  '.dark': {
    '--background': COLORS.black,
    '--foreground': COLORS.gray[100],
    '--card': COLORS.black,
    '--card-foreground': COLORS.gray[100],
    '--popover': COLORS.black,
    '--popover-foreground': COLORS.gray[100],
    '--primary': COLORS.blue.light,
    '--primary-foreground': COLORS.black,
    '--secondary': COLORS.gray[600],
    '--secondary-foreground': COLORS.gray[100],
    '--muted': COLORS.gray[600],
    '--muted-foreground': COLORS.gray[400],
    '--accent': COLORS.cyan.light,
    '--accent-foreground': COLORS.gray[100],
    '--destructive': COLORS.red.dark,
    '--destructive-foreground': COLORS.gray[100],
    '--border': COLORS.gray[600],
    '--input': COLORS.gray[600],
    '--ring': COLORS.blue.dark,

    // default
    '--chart-1': 'hsl(220, 70%, 50%)',
    '--chart-2': 'hsl(160, 60%, 45%)',
    '--chart-3': 'hsl(30, 80%, 55%)',
    '--chart-4': 'hsl(280, 65%, 60%)',
    '--chart-5': 'hsl(340, 75%, 55%)',
  },
}

function hslToString(hsl: string) {
  return hsl
    .replace('hsl(', '')
    .replace(')', '')
    .split(',')
    .map(value => value.trim())
    .join(' ')
}

function transformShadcnVariables(obj: any): any {
  const transformedObj: any = {}

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      transformedObj[key] = transformShadcnVariables(obj[key])
    }
    else if (typeof obj[key] === 'string' && obj[key].startsWith('hsl')) {
      transformedObj[key] = hslToString(obj[key])
    }
    else {
      transformedObj[key] = obj[key]
    }
  }

  return transformedObj
}

export const shadcnCssVariable = transformShadcnVariables(shadcnCssVariableHsl)
