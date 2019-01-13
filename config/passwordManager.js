export default {
  id: 'passwordManager',
  title: 'Password Manager',
  description: `A password manager helps you set unique passwords for each service you use. Having a unique password ensures that if one service you use is hacked, the leaked password won’t allow access to all of your accounts.
    
    \n\nAt the very minimum you should have a unique password for high-value accounts like a Google account, email applications, an Apple ID, and financial accounts.
    `,
  apps: [
    {
      name: '1Password',
      image: '/static/img/1password.jpg',
      url: 'https://1password.com/',
      sources: {
        windows: 'https://1password.com/downloads/windows/',
        macos: 'https://1password.com/downloads/mac/',
        ios: 'https://1password.com/downloads/ios/',
        android: 'https://1password.com/downloads/android/',
      },
    },
    {
      name: 'LastPass',
      image: '/static/img/lastpass.jpg',
      url: 'https://www.lastpass.com/',
      sources: {
        windows:
          'https://download.cloud.lastpass.com/windows_installer/lastpass.exe',
        macos:
          'https://itunes.apple.com/us/app/lastpass/id926036361?ls=1&mt=12',
        ios:
          'https://itunes.apple.com/us/app/lastpass-password-manager/id324613447',
        android: 'https://lastpass.com/android_market.php',
      },
    },
  ],
  resources: [
    {
      name: 'How to use a password manager (and why you really should)',
      url:
        'https://www.theverge.com/2017/7/24/15921282/best-password-manager-1password-lastpass-dashlane-how-to',
    },
    {
      name: 'How password managers work and why you should use one',
      url:
        'https://motherboard.vice.com/en_us/article/59yv5x/how-password-managers-work-and-why-you-should-use-one',
    },
  ],
};