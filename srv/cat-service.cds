using my.bookshop as my from '../db/schema';

service CatalogService {
    entity Books   as projection on my.Books;
    entity Authors as projection on my.Authors;
    entity Customers as projection on my.Customers;
    entity Reviews as projection on my.Reviews;
    entity Publishers as projection on my.Publishers;
    entity People as projection on my.People;
    entity Appointments as projection on my.Appointments;
    entity Startdate as projection on my.Startdate;
    action clearRating(@(UI.ParameterDefaultValue : 0)rating: Integer not null @mandatory ) returns Reviews;

    function fnCrud(action : String) returns String;
}
