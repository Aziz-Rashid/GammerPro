module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif']
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        quinary: 'var(--color-quinary)',
        senary: 'var(--color-senary)',
        septenary: 'var(--color-septenary)',
        octonary: 'var(--color-octonary)',
        nonary: 'var(--color-nonary)',
        denary: 'var(--color-denary)',
        duodenary: 'var(--color-duodenary)',
        vigenary: 'var(--color-vigenary)',
        trigenary: 'var(--color-trigenary)',
        'light-yellow': 'var(--color-light-yellow)',
        'light-blue': 'var(--color-light-blue)',
        'light-green': 'var(--color-light-green)',
        'dark-violet': '#C60BF4',
      },
      borderWidth: {
        '6': '6px'
      },
      fontSize: {
        '14px': ['14px', {
          lineHeight: '24px'
        }],
        '16px': ['16px', {
          lineHeight: '28px'
        }],
        '18pxl': ['18px', {
          lineHeight: '28px'
        }],
        '18px': ['18px', {
          lineHeight: '30px'
        }],
        '20px': ['20px', {
          lineHeight: '23.7px'
        }],
        '20px3': ['20px', {
          lineHeight: '30px'
        }],
        '20pxl': ['20px', {
          lineHeight: '38px'
        }],
        '20pxl2': ['20px', {
          lineHeight: '45px'
        }],
        '25px': ['25px', {
          lineHeight: '38px'
        }],
        '25pxl': ['25px', {
          lineHeight: '28px'
        }],
        '28px': ['28px', {
          lineHeight: '28px'
        }],
        '28pxl': ['28px', {
          lineHeight: '38px'
        }],
        '30px': ['30px', {
          lineHeight: '40px'
        }],
        '30pxl': ['30px', {
          lineHeight: '60px'
        }],
        '40pxl': ['40px', {
          lineHeight: '30px'
        }],
        '40px': ['40px', {
          lineHeight: '46.88px'
        }],
        '50px': ['50px', {
          lineHeight: '60px'
        }],
        '60px': ['60px', {
          lineHeight: '.1'
        }],
        '70px': ['70px', {
          lineHeight: '60px'
        }],
        '70pxl': ['70px', {
          lineHeight: '80px'
        }],
        '80px': ['80px', {
          lineHeight: '92px'
        }],
      },
      spacing: {
        '2px': '2px',
        '5px': '5px',
        '6px': '6px',
        '7.37px': '7.37px',
        '8px': '8px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '17.79px': '17.79px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '21px': '21px',
        '23px': '23px',
        '26px': '26px',
        '30px': '30px',
        '31px': '31px',
        '32px': '32px',
        '33px': '33px',
        '34px': '34px',
        '38px': '38px',
        '40px': '40px',
        '41px': '41px',
        '42px': '42px',
        '43px': '43px',
        '46px': '46px',
        '47px': '47px',
        '50px': '50px',
        '53px': '53px',
        '54px': '54px',
        '57px': '57px',
        '58px': '58px',
        '60px': '60px',
        '62.4px': '62.4px',
        '63px': '63px',
        '67px': '67px',
        '70px': '70px',
        '71px': '71px',
        '73px': '73px',
        '74px': '74px',
        '77px': '77px',
        '81px': '81px',
        '82px': '82px',
        '86px': '86px',
        '90px': '90px',
        '93px': '93px',
        '94px': '94px',
        '95px': '95px',
        '101px': '101px',
        '106px': '106px',
        '110px': '110px',
        '116.02px': '116.02px',
        '127px': '127px',
        '140px': '140px',
        '150px': '150px',
        '151px': '151px',
        '160px': '160px',
        '161px': '161px',
        '170px': '170px',
        '178px': '178px',
        '186px': '186px',
        '214px': '214px',
        '218px': '218px',
        '220px': '220px',
        '230px': '230px',
        '232px': '232px',
        '249px': '249px',
        '266px': '266px',
        '281px': '281px',
        '302px': '302px',
        '320px': '320px',
        '330px': '330px',
        '331px': '331px',
        '348.25px': '348.25px',
        '370px': '370px',
        '380px': '380px',
        '400px': '400px',
        '430px': '430px',
        '465px': '465px',
        '520px': '520px',
        '556px': '556px',
        '594px': '594px',
        '638px': '638px',
        '675px': '675px',
        '728px': '728px',
        '735px': '735px',
        '840px': '840px',
        '957px': '957px',
        '959px': '959px',
        '1076px': '1076px',
        '1170px': '1170px',
        '1258px': '1258px',
        '1326px': '1326px',
      },
      borderRadius: {
        '5px': '5px',
        '10px': '10px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen 2xl': {
            maxWidth: '1920px',
          }
        }
      })
    }
  ],
}