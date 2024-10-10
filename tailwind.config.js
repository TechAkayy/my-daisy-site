
/* Pinegrow generated Design Panel Begin */

const pg_colors = {gray: {'50': '#f9fafb',
'100': '#f3f4f6',
'200': '#e5e7eb',
'300': '#d1d5db',
'400': '#9ca3af',
'500': '#6b7280',
'600': '#4b5563',
'700': '#374151',
'800': '#1f2937',
'900': '#111827',
},
red: {'50': '#fef2f2',
'100': '#fee2e2',
'200': '#fecaca',
'300': '#fca5a5',
'400': '#f87171',
'500': '#ef4444',
'600': '#dc2626',
'700': '#b91c1c',
'800': '#991b1b',
'900': '#7f1d1d',
},
yellow: {'50': '#fffbeb',
'100': '#fef3c7',
'200': '#fde68a',
'300': '#fcd34d',
'400': '#fbbf24',
'500': '#f59e0b',
'600': '#d97706',
'700': '#b45309',
'800': '#92400e',
'900': '#78350f',
},
green: {'50': '#ecfdf5',
'100': '#d1fae5',
'200': '#a7f3d0',
'300': '#6ee7b7',
'400': '#34d399',
'500': '#10b981',
'600': '#059669',
'700': '#047857',
'800': '#065f46',
'900': '#064e3b',
},
blue: {'50': '#eff6ff',
'100': '#dbeafe',
'200': '#bfdbfe',
'300': '#93c5fd',
'400': '#60a5fa',
'500': '#3b82f6',
'600': '#2563eb',
'700': '#1d4ed8',
'800': '#1e40af',
'900': '#1e3a8a',
},
indigo: {'50': '#eef2ff',
'100': '#e0e7ff',
'200': '#c7d2fe',
'300': '#a5b4fc',
'400': '#818cf8',
'500': '#6366f1',
'600': '#4f46e5',
'700': '#4338ca',
'800': '#3730a3',
'900': '#312e81',
},
purple: {'50': '#f5f3ff',
'100': '#ede9fe',
'200': '#ddd6fe',
'300': '#c4b5fd',
'400': '#a78bfa',
'500': '#8b5cf6',
'600': '#7c3aed',
'700': '#6d28d9',
'800': '#5b21b6',
'900': '#4c1d95',
},
pink: {'50': '#fdf2f8',
'100': '#fce7f3',
'200': '#fbcfe8',
'300': '#f9a8d4',
'400': '#f472b6',
'500': '#ec4899',
'600': '#db2777',
'700': '#be185d',
'800': '#9d174d',
'900': '#831843',
},
primary: {'50': '#f4efed',
'100': '#e6d6cb',
'200': '#d8bcaa',
'300': '#c9a48a',
'400': '#b98b6b',
'500': '#a8744d',
'600': '#966845',
'700': '#855c3d',
'800': '#745035',
'900': '#63452e',
},
secondary: {'50': '#ebeced',
'100': '#bfc6cb',
'200': '#93a0a9',
'300': '#6a7d89',
'400': '#415b6a',
'500': '#163b4d',
'600': '#143545',
'700': '#122f3d',
'800': '#0f2935',
'900': '#0d232e',
},
'color3': {'50': '#fdf7f1',
'100': '#fdeddd',
'200': '#fce2c8',
'300': '#fad8b4',
'400': '#f7cea0',
'500': '#f4c48c',
'600': '#daaf7d',
'700': '#c19b6f',
'800': '#a88761',
'900': '#907453',
},
'color4': {'50': '#f1f0ef',
'100': '#dcd7d5',
'200': '#c8bfbc',
'300': '#b4a7a3',
'400': '#a0908a',
'500': '#8c7973',
'600': '#7d6c67',
'700': '#6f605b',
'800': '#61544f',
'900': '#534844',
},
}

const pg_fonts = {sans: ["'Fraunces', serif",
],
serif: ["'Mali', sans-serif",
],
}   

const pg_backgrounds = {'design-image': "url('https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDUzfHxjYWZlJTIwdGVhfGVufDB8fHx8MTcyODU2Mjg5OHww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max')",
'design-image-large': "url('https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDUzfHxjYWZlJTIwdGVhfGVufDB8fHx8MTcyODU2Mjg5OHww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max')",
}    
             
                
    /* Pinegrow generated Design Panel End */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "_pginfo/used-classes.html"],
  theme: {
    extend: {
      colors: pg_colors,
      fontFamily: pg_fonts,
      backgroundImage: pg_backgrounds,
      screens: {
        '3xl': '1600px',
      },
    }
  },
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
          primary: pg_colors.primary[500],
          secondary: pg_colors.secondary[500],
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [require("daisyui")]
};