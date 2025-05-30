namespace my.bookshop;

using {cuid} from '@sap/cds/common';

@assert.unique: {title: [title]}
entity Books : cuid {
  title           : String(100) @mandatory;
  publicationDate : Date;
  author          : Association to Authors;
  publisher       : Association to Publishers;
  reviews         : Association to Reviews;
  startDate       : DateTime;
}

@assert.unique: {name: [name]}
entity Authors : cuid {
  name      : String(100) @mandatory;
  biography : String(500);
  books     : Association to many Books
                on books.author = $self;
}

@assert.unique: {name: [name]}
entity Customers : cuid {
  name    : String(100) @mandatory;
  email   : String(100);
  address : String(200);
  reviews : Association to many Reviews
              on reviews.customer = $self;
}

entity Reviews : cuid {
  reviewDate : Date;
  message    : String(200);
  rating     : Integer;
  customer   : Association to Customers;
  books      : Association to many Books
                 on books.reviews = $self;
}

@assert.unique: {name: [name]}
entity Publishers : cuid {
  name    : String(100) @mandatory;
  address : String(200);
  books   : Association to many Books
              on books.publisher = $self;
}


// For Calendar
entity People : cuid {
  name         : String(200);
  role         : String(200);
  appointments : Composition of many Appointments
                   on appointments.people = $self;
}

entity Appointments : cuid {
  start  : DateTime;
  end    : DateTime;
  title  : String(200);
  info   : String(200);
  type   : String(200);
  people : Association to People;
}

entity Startdate {
  key id    : Integer;
      start : DateTime;
}
