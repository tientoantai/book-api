
exports.up = function(knex, Promise) {
    return knex.schema.table('books', function (table) {
        table.string('thumbnail');
        table.text('description');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('books', function (table) {
        table.dropColumn('thumbnail');
        table.dropColumn('description');
    });
};
