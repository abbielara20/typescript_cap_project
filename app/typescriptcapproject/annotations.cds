using CatalogService as service from '../../srv/cat-service';

annotate service.Books with @(
    UI.FieldGroup #GeneratedGroup   : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: author.name,
                Label: 'Author',
            },
            {
                $Type: 'UI.DataField',
                Label: 'Publication Date',
                Value: publicationDate,
            },
            {
                $Type: 'UI.DataField',
                Value: publisher.name,
                Label: 'Publisher name',
            },
            {
                $Type: 'UI.DataField',
                Value: publisher.address,
                Label: 'Publisher Address',
            },
        ],
    },
    UI.Facets                       : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneralInformation',
            Label : 'General Information',
            Target: '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Author Information',
            ID    : 'AuthorInformation',
            Target: '@UI.FieldGroup#AuthorInformation',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Reviews',
            ID    : 'Reviews',
            Target: '@UI.FieldGroup#Reviews',
        },
    ],
    UI.LineItem                     : [
        {
            $Type: 'UI.DataField',
            Label: 'Title',
            Value: title,
        },
        {
            $Type: 'UI.DataField',
            Value: author.name,
            Label: 'Author',
        },
        {
            $Type : 'UI.DataFieldForAnnotation',
            Target: 'publisher/@Communication.Contact#contact',
            Label : 'Publisher',
        },
        {
            $Type: 'UI.DataField',
            Label: 'Publication Date',
            Value: publicationDate,
        },
        {
            $Type            : 'UI.DataFieldForAnnotation',
            Target           : 'reviews/@UI.DataPoint#rating',
            Label            : 'Rating',
            ![@UI.Importance]: #High,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'CatalogService.EntityContainer/clearRating',
            Label : 'Clear Ratings',
        },
    ],
    UI.HeaderInfo                   : {
        Title         : {
            $Type: 'UI.DataField',
            Value: title,
        },
        TypeName      : '',
        TypeNamePlural: '',
    },
    UI.FieldGroup #AuthorInformation: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: author.name,
                Label: 'Name',
            },
            {
                $Type: 'UI.DataField',
                Value: author.biography,
                Label: 'Biography',
            },
        ],
    },
    UI.FieldGroup #Reviews          : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: reviews.customer.name,
                Label: 'Name',
            },
            {
                $Type: 'UI.DataField',
                Value: reviews.customer.email,
                Label: 'Email Address',
            },
            {
                $Type: 'UI.DataField',
                Value: reviews.message,
                Label: 'Message',
            },
            {
                $Type: 'UI.DataField',
                Value: reviews.reviewDate,
                Label: 'Review Date',
            },
        ],
    },
    UI.SelectionFields              : [
        author.name,
        publisher.name,
    ],
    UI.DeleteHidden                 : true,
    UI.LineItem #tableMacro         : [],
);

annotate service.Authors with {
    name @(Common.Label: 'Author',
    )
};

annotate service.Publishers with {
    name @Common.Label: 'Publisher'
};

annotate service.Reviews with @(UI.DataPoint #rating: {
    Value        : rating,
    Visualization: #Rating,
    TargetValue  : 5,
});

annotate service.Publishers with @(Communication.Contact #contact: {
    $Type: 'Communication.ContactType',
    fn   : name,
    adr  : [{
        $Type  : 'Communication.AddressType',
        type   : #work,
        country: address,
    }, ],
});

