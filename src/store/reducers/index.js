
const initialState = {
    lunches: [
        {
            "id": 1,
            "school": "Mann Inc",
            "about": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "caption": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "donation": "$3211.42",
            "image": "http://dummyimage.com/750x500.png/5fa2dd/ffffff"
          }, {
            "id": 2,
            "school": "Gorczany LLC",
            "about": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "caption": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            "donation": "$8492.03",
            "image": "http://dummyimage.com/750x500.png/cc0000/ffffff"
          }, {
            "id": 3,
            "school": "McCullough, Hane and Nienow",
            "about": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "caption": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "donation": "$5379.23",
            "image": "http://dummyimage.com/750x500.png/cc0000/ffffff"
          }, {
            "id": 4,
            "school": "Wehner, Dare and Flatley",
            "about": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "caption": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
            "donation": "$4449.14",
            "image": "http://dummyimage.com/750x500.png/ff4444/ffffff"
          }, {
            "id": 5,
            "school": "Conroy and Sons",
            "about": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
            "caption": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            "donation": "$8294.19",
            "image": "http://dummyimage.com/750x500.png/ff4444/ffffff"
          }, {
            "id": 6,
            "school": "Mills-Connelly",
            "about": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "caption": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "donation": "$9725.47",
            "image": "http://dummyimage.com/750x500.png/cc0000/ffffff"
          }, {
            "id": 7,
            "school": "Hartmann-Bogisich",
            "about": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            "caption": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            "donation": "$1227.27",
            "image": "http://dummyimage.com/750x500.png/dddddd/000000"
          }, {
            "id": 8,
            "school": "Swift, Hickle and Beier",
            "about": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "caption": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            "donation": "$7331.95",
            "image": "http://dummyimage.com/750x500.png/dddddd/000000"
          }, {
            "id": 9,
            "school": "Feeney-Kuhic",
            "about": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
            "caption": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "donation": "$4561.38",
            "image": "http://dummyimage.com/750x500.png/dddddd/000000"
          }, {
            "id": 10,
            "school": "Muller, Brekke and Skiles",
            "about": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "caption": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "donation": "$2433.64",
            "image": "http://dummyimage.com/750x500.png/cc0000/ffffff"
          }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state
    }
}

export default rootReducer;