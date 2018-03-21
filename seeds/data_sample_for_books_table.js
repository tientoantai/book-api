
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'The Heaven Sword and Dragon Saber', author: 'Jin Yong', publisher: 'Kim Dong', price: 25},
        {title: 'Demi-Gods and Semi-Devils', author: 'Jin Yong', publisher: 'Kim Dong', price: 26},
        {title: 'Fox Volant of the Snowy Mountain', author: 'Jin Yong', publisher: 'Kim Dong', price: 24},
        {title: 'The Legend of the Condor Heroes', author: 'Jin Yong', publisher: 'Kim Dong', price: 30},
        {title: 'The Smiling, Proud Wanderer', author: 'Jin Yong', publisher: 'Kim Dong', price: 30},
      ]);
    });
};
