
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'The Heaven Sword and Dragon Saber', author: 'Jin Yong', publisher: 'Kim Dong', price: 25,
            thumbnail: "http://mangabookshelf.com/wp-content/uploads/2012/04/hsds_cover.jpg",
            description: "The Heaven Sword and Dragon Saber, also translated as The Sword and the Knife,[1] is a wuxia novel by Jin Yong (Louis Cha). It is the third instalment in the Condor Trilogy and is preceded by The Legend of the Condor Heroes and The Return of the Condor Heroes. It was first serialised from 6 July 1961 to 2 September 1963 in the Hong Kong newspaper Ming Pao."},
        {title: 'Demi-Gods and Semi-Devils', author: 'Jin Yong', publisher: 'Kim Dong', price: 26,
            thumbnail:"https://images-na.ssl-images-amazon.com/images/I/51%2BITB8fraL._SX322_BO1,204,203,200_.jpg",
            description: "Demi-Gods and Semi-Devils is a wuxia novel by Jin Yong (Louis Cha). It was first serialised concurrently from 3 September 1963 to 27 May 1966 in the newspapers Ming Pao in Hong Kong[1] and Nanyang Siang Pau in Singapore. The novel has since spawned adaptations in film and television in Hong Kong, mainland China and Taiwan."},
        {title: 'Fox Volant of the Snowy Mountain', author: 'Jin Yong', publisher: 'Kim Dong', price: 24,
            thumbnail: "https://www.chineseupress.com/image/cache/data/books/initial/9789622017337-500x730.jpg",
            description:"Fox Volant of the Snowy Mountain, also known as Flying Fox of Snowy Mountain, is a wuxia novel by Jin Yong (Louis Cha). It was first serialised between 9 February and 18 June 1959 in the Hong Kong newspaper New Evening Post. The novel has a prequel, The Young Flying Fox, which was released in 1960. "},
        {title: 'The Legend of the Condor Heroes', author: 'Jin Yong', publisher: 'Kim Dong', price: 30,
            thumbnail: "https://cdn.novelupdates.com/images/2015/09/loch.jpg",
            description:"The Legend of the Condor Heroes is a wuxia novel by Jin Yong (Louis Cha). It is the first part of the Condor Trilogy and is followed by The Return of the Condor Heroes and The Heaven Sword and Dragon Saber. ... In February 2018, a translation of the first volume (out of four) was published with the title A Hero Born."},
        {title: 'The Smiling, Proud Wanderer', author: 'Jin Yong', publisher: 'Kim Dong', price: 30,
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82i76JgOZ2bM6nkv1-jXxs1yFN7K8XXIFp65pqJbQ5o1vYSd-jQ",
            description: "The Smiling, Proud Wanderer is a wuxia novel by Jin Yong (Louis Cha). It was first serialised in Hong Kong in the newspaper Ming Pao from 20 April 1967 to 12 October 1969. The Chinese title of the novel, Xiao Ao Jiang Hu, literally means to live a carefree life in a mundane world of strife."},
      ]);
    });
};
