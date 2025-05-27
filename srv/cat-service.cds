using my.bookshop as my from '../db/schema';

service CatalogService {
    entity Books   as projection on my.Books;
    entity Authors as select from my.Authors;
    function fnCrud(action : String) returns String;
}
