angular.module('app').service('svc', function() {
    this.test = "test time"
    this.shoes = [{
            id: 1,
            type: 'sandals',
            color: 'black',
            size: 9
        },
        {
            id: 2,
            type: 'high-heels',
            color: 'red',
            size: 7
        },
        {
            id: 3,
            type: 'boots',
            color: 'brown',
            size: 13
        },
        {
            id: 4,
            type: 'chacos',
            color: 'green',
            size: 9.5
        },
        {
            id: 5,
            type: 'crocs',
            color: 'purple',
            size: 11
        },
    ]

    this.findShoe = (happyID) => {
        return this.shoes.filter(e => e.id === Number(happyID))[0]
    }


})