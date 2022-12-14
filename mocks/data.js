export default {
  categories: [
    {
      id: 1,
      type: 'category',
      name: 'Art',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 160,
    },
    {
      id: 2,
      type: 'category',
      name: 'Music',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 160,
    },
    {
      id: 3,
      type: 'category',
      name: 'Domain names',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 160,
    },
    {
      id: 4,
      type: 'category',
      name: 'Virtual worlds',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 160,
    },
    {
      id: 5,
      type: 'category',
      name: 'Trading Cards',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 160,
    },
  ],
  notableDrops: [
    {
      id: 1,
      name: "Gab's Beach Club",
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 210,
    },
    {
      id: 2,
      name: 'Refix Anadol',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 210,
    },
    {
      id: 3,
      name: 'Javier Mariscal',
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
      size: 210,
    },
  ],
  users: [
    {
      id: 1,
      name: 'Getijde by Bart',
      username: 'Artblocks_Admin',
      coverImage: 'https://picsum.photos/200/300?random=1' + Math.random(),
      avatar: 'https://picsum.photos/200/300?random=1' + Math.random(),
      verified: true,
    },
    {
      id: 2,
      name: 'The Sandbox',
      username: 'TheSandboxGame',
      coverImage: 'https://picsum.photos/200/300?random=1' + Math.random(),
      avatar: 'https://picsum.photos/200/300?random=1' + Math.random(),
      verified: false,
    },
    {
      id: 3,
      name: 'Adidas Original',
      username: 'adidas_official',
      coverImage: 'https://picsum.photos/200/300?random=1' + Math.random(),
      avatar: 'https://picsum.photos/200/300?random=1' + Math.random(),
      verified: true,
    },
    {
      id: 3,
      name: 'Decentraland',
      username: 'decentraland',
      coverImage: 'https://picsum.photos/200/300?random=1' + Math.random(),
      avatar: 'https://picsum.photos/200/300?random=1' + Math.random(),
      verified: true,
    },
    {
      id: 4,
      name: 'iNFT Personality',
      username: 'Alethea_AI',
      coverImage: 'https://picsum.photos/200/300?random=1' + Math.random(),
      avatar: 'https://picsum.photos/200/300?random=1' + Math.random(),
      verified: false,
    },
  ],
  nfts: [
    {
      id: 1,
      user: {
        username: 'Party Bear',
        verified: false,
      },
      title: 'Small #2224',
      price: Math.round((Math.random() * 9 + 1) * 10) / 10,
      likes: Math.floor(Math.random() * 100),
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
    },
    {
      id: 2,
      user: {
        username: 'Danny Kass Art',
        verified: false,
      },
      title: 'Trippy Wolf of Wallstreet',
      price: Math.round((Math.random() * 9 + 1) * 10) / 10,
      likes: Math.floor(Math.random() * 100),
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
    },
    {
      id: 3,
      user: {
        username: 'CryptoPunks #1760',
        verified: true,
      },
      title: 'CryptoPunks',
      price: Math.round((Math.random() * 9 + 1) * 10) / 10,
      likes: Math.floor(Math.random() * 100),
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
    },
    {
      id: 4,
      user: {
        username: 'Getjide by Bart',
        verified: true,
      },
      title: 'Parcel 50,125',
      price: Math.round((Math.random() * 9 + 1) * 10) / 10,
      likes: Math.floor(Math.random() * 100),
      image: 'https://picsum.photos/200/300?random=1' + Math.random(),
    },
  ],
};
