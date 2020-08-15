import { ExitStatus } from "typescript";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //Your data structures, A.K.A Entities
      contacts: [
        /* 				{
					id: "281",
					agenda_slug: "mmayoragenda",
					full_name: "Miguel Mayor",
					email: "mmayor@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 22:48:46"
				},
				{
					id: "313",
					agenda_slug: "mmayoragenda",
					full_name: "Saili Mayor",
					email: "saili@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:33:42"
				},
				{
					id: "314",
					agenda_slug: "mmayoragenda",
					full_name: "Pepe Mayor",
					email: "Pepe@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:34:01"
				} */
      ],
      user: {
        id: '1',
        name: 'Juan Perez',
        email: 'juan@gmail.com',
        userStoreId:1
      },
      login:{},
      userStore:undefined,
/*       userStore: {
        url: 'juan2020',
        userFirstName: 'Juan',
        storeName:'Juan Store',
        userPhoto: '/images/juanita.jpg',
        storePhoto: '/images/tendita-juanita.png',
        contryStore: 'Chile',
        cityStore: 'Santiago',
        district: 'Las Condes',
        registerDate: '01-fev-2020',
        qtyToBeSale: 62,
        qtySold: 422,
        qtyLikes: 10,
        qtyFollowers: 5000,
        qtyFollowing: 2000,
        blocked: false,
        products: [
          {
            id:1,
            name: 'Product 1',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:2,
            name: 'Product 2',
            price: 20000.00,
            photo: '/images/15kg-Conjunto- 5.png'
          },
          {
            id:3,
            name: 'Product 3',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 6.png'
          },
          {
            id:4,
            name: 'Product 4',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:5,
            name: 'Product 5',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:6,
            name: 'Product 6',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:7,
            name: 'Product 7',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:8,
            name: 'Product 8',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:9,
            name: 'Product 9',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:10,
            name: 'Product 10',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:11,
            name: 'Product 11',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:12,
            name: 'Product 12',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:3,
            name: 'Product 13',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          }
        ]
      },
 */   infobar: {
        show:false,
        info:'',
        info2:'',
        image: null
        
      },
      infoStore: {
        userName:"juanita",
        storeName:'Juanita',
        photoShopper_src:'/images/juanita.jpg',
        photoStore_src: '/images/tendita-ejuanita.jpg'
        
      },
      userCart:{
        id: null,
        user: null,
        products: []
      },
      userMessages: null,
      product: {
        id: '',
        name:'',
        price: 0,
        originalPrice: 0, 
        hasBrand: false,
        brand: "",
        color: "",
        model: "",
        weight: 0,
        flete:0,
        weightUnitId: 1,
        qty: 0,
        photos: [
            "",
            "",
            "",
            "",
            ""
        ],
        departmentId: 1,
        categoryId: 1,
        sizeId: 1,
        productStateId: 1,
        userStoreId: ''
    } ,  
/*       product: {
        id: 1000,
        store: {
          id: 1,
          url:'juan2020',
          userFirstName: 'Juania',
          storeName: 'Juan Store',
          userPhoto: '/images/juanita.jpg',
          storePhoto: '/images/tendita-juanita.png'
        },
        name: "Zapatillas deportivas transpirables a la moda para hombre y mujer",
        price: 23000.00,
        originalPrice: 40000.00, 
        brand: 'Ruko',
        color: 'Verde Amerillo',
        model: 'Deportiva',
        size: '41',
        condition: 'Nuevo',
        qty: 1,
        photos: [
          '/images/Imagen Muestra.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 6.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 7.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 8.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 9.png',
        ],
        relatedProducts: [
          {
            id: 1001,
            name: 'Product 1',
            price: 12000,
            photo: '/images/Hee79dcebf31a47f2b483 2.png'
          },
          {
            id: 1002,
            name: 'Product 2',
            price: 12000,
            photo: '/images/4c10f6caade55663e34b2699d4353c18 2.png'
          },
          {
            id: 1003,
            name: 'Product 3',
            price: 12000,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id: 1004,
            name: 'Product 4',
            price: 12000,
            photo: '/images/15kg-Conjunto- 6.png'
          },
          {
            id: 1005,
            name: 'Product 5',
            price: 12000,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id: 1005,
            name: 'Product 6',
            price: 12000,
            photo: '/images/15kg-Conjunto- 7.png'
          }
        ]
      },
 */   
      regionList:[],
      departmentList:[],
      categoryList:[],
      weightUnitList:[],
      sizeList:[],
      productStateList:[],
      ordersList:[],
      products: [
        {
          id: "1000",
          nombre_producto: "Arrimo",
          precio: "$ 40.000",
        },
        {
          id: "1001",
          nombre_producto: "Bateria de Cocina",
          precio: "$ 10.000",
        },
        {
          id: "1002",
          nombre_producto: "Reloj Hombre",
          precio: "$ 5.000",
        },
        {
          id: "1003",
          nombre_producto: "Botas de Nieve",
          precio: "$ 60.000",
        },
        {
          id: "1004",
          nombre_producto: "Botas de invierno",
          precio: "$ 120.000",
        },
      ],

      error: undefined,
    },
    actions: {
      //(Arrow) Functions that update the Store
      // Remember to use the scope: scope.state.store & scope.setState()
      setInfoBar: (show, info, info2, image) => {
        console.log('flux.setInfoBar')
        //const store = getStore()
        let infobar =  {
          show:show,
          info:info,
          info2: info2,
          image: image
        }
        setStore({ infobar: infobar });
      },

      setInfoStore: (userName,storeName, photoShopper_src, photoStore_src ) => {
        console.log('flux.setInfoStore')
        //const store = getStore()
        let infoStore =  {
          userName:userName,
          storeName:storeName,
          photoShopper_src: photoShopper_src,
          photoStore_src: photoStore_src
        }
        setStore({ infoStore: infoStore });
      },

      getInfoBar: () => {
        console.log('flux.setInfoBar')
        const store = getStore()

        return store.infobar;
      },
      
      getInfoStore: () => {
        console.log('flux.getInfoStore')
        const store = getStore()

        return store.infoStore;
      },

      setProduct: (product) => {
        console.log('flux.setProduct')
  
        setStore({ product: product });
      },

      
      getUser() {
        console.log('flux.getUser()')
        const store = getStore()

        return store.user
      },
      fetchProduct: async (id) => {
        console.log("flux.fetchProduct");
        console.log("flux.fetchProduct.env", process.env);
        console.log("flux.fetchProduct.process.env.REACT_APP_URL2", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/product/`
        
        if(id)
          url = process.env.REACT_APP_URL+`/product/${id}`

        console.log("flux.fetchProduct.url", url)
        const store = getStore();
        let product = {}
      
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchProduct.data", data);
            product = data;
            setStore({ product: product });
          })
          .catch((error) => {
            console.log("flux.fetchProduct.error", error);
          });

          console.log("flux.fetchProduct.product", product);

        return store.product

      },
      fetchUserCart: (userId) => {
        const store = getStore();
        return store.userCart
      },
      addProductToCart: (prod, amount) => {
        console.log('>>>addProductToCart=', prod)
        const store = getStore();
        let userCart = store.userCart
        let hasProduct = -1

        console.log('>>>addProductToCart.userCart.products.length=', userCart.products.length)
        for(let i=0; i<userCart.products.length; i++) {
          console.log('>>>addProductToCart=>', i, userCart.products[i].id, prod)

          if (userCart.products[i].id === prod.id){
            hasProduct = i
            break
          }
        }
        console.log('>>>addProductToCart.hasProduct=', hasProduct)

        if (hasProduct>-1)
          userCart.products[hasProduct] = prod
        else
          userCart.products.push(prod)

        setStore({ userCart: userCart });

      },
      fetchLogin: async (login, history) => {
        console.log("****>flux.fetchLogin")
        const store = getStore();
        const actions = getActions();

        console.log("****>flux.login.login=", login)


        let url = process.env.REACT_APP_URL+'/login/'
        console.log("flux.fetchLogin.url="+url)

        let methodCall = 'POST'

        console.log("flux.fetchLogin.methodCall=", methodCall)

        await fetch(url, {
            method: methodCall,
            body: JSON.stringify(login),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("flux.fetchLogin.data", data);
          localStorage.setItem("login", data);
          let ver = localStorage.getItem("login");
          console.log('flux.fetchLogin.ver=', ver.data)
          actions.setLogin(data);
          console.log('flux.fetchLogin.store.login=', store.login)
          history.push("/");

        })
        .catch((error) => {
          console.log("flux.fetchUserStore.error", error);
        });
      },
      getLogin:()=>{
        const store = getStore();
  
        let login=localStorage.getItem("login");

        return store.login
      },
      setLogin:(loginData)=>{
        const store = getStore();

        setStore({ login: loginData });
        let login=localStorage.getItem("login");
        return store.login
      },
      resetLogin:() => {
        let login={}
        const actions = getActions();
        actions.setLogin(login)
      },
      resetProduct: async () => {
        console.log('***flux.resetProduct')
        const actions = getActions();
        
        let productInitialSetup= {
          id: '',
          name:'',
          price: 0,
          originalPrice: 0, 
          hasBrand: false,
          brand: "",
          color: "",
          model: "",
          weight: 0,
          flete:0,
          weightUnitId: 1,
          qty: 0,
          photos: [
              "",
              "",
              "",
              "",
              ""
          ],        
          departmentId: 1,
          categoryId: 1,
          sizeId: 1,
          productStateId: 1,
          userStoreId: ''
        } 

        await actions.setProduct(productInitialSetup);
      },      
      setProduct: async (product) => {
        await setStore({ product: product });
      },
      resetUserStore: async () => {
        const actions = getActions();
        await actions.setUserStore(null);
      },
      setUserStore: async (userStore) => {
        await setStore({ userStore: userStore });
      },

      fetchUserStore: async (userName, id) => {
        console.log("flux.fetchUserStore");
        console.log("flux.fetchUserStore.env", process.env);
        console.log("flux.fetchUserStore.process.env.REACT_APP_URL2", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/user-store/${userName}`
        
        if(id)
          url = process.env.REACT_APP_URL+`/my-store/${id}`

        console.log("flux.fetchUserStore.url", url)
        const store = getStore();
        let userStore = {}
      
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchUserStore.data", data);
            userStore = data;
            setStore({ userStore: userStore });
          })
          .catch((error) => {
            console.log("flux.fetchUserStore.error", error);
          });

          console.log("flux.fetchUserStore.userStore", userStore);

        return store.userStore
      },
      fetchUserMessages: async (userId) => {  
        console.log("flux.fetchUserMessages");
        console.log("flux.fetchUserMessages.env", process.env);
        console.log("flux.fetchUserMessages.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/user-message/user/${userId}`

        console.log("flux.fetchUserMessages.url", url)
        const store = getStore();
      
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchUserMessages.data", data);

            setStore({ userMessages: data });
          })
          .catch((error) => {
            console.log("flux.fetchUserMessages.error", error);
          });

          console.log("flux.fetchUserMessages.userMessages", store.userMessages);

        return store.userMessages

      },
      deleteUserMessages: async (id) => {  
        console.log("flux.deleteUserMessages.id=", id);
        console.log("flux.deleteUserMessages.env", process.env);
        console.log("flux.deleteUserMessages.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/user-message/${id}`

        console.log("flux.deleteUserMessages.url", url)
        const store = getStore();
        const actions = getActions();   
        
        
				fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
        .then(resp => {
          console.log("flux.deleteUserMessages.resp.status=", resp.status);
          //setStore({ userMessages: []});
          console.log("flux.deleteUserMessages.store.userMessages (1):", store.userMessages);
          return resp.json();
        })
        .then((data) => {
          console.log("flux.deleteUserMessages.data", data);
          let userMessages = data;
          setStore({ userMessages: userMessages });
        })
        .catch(error => {
          //error handling
          console.log('>>error:', error);
        });

        console.log("flux.fetchUserMessages.userMessages (2):", store.userMessages);

        //return store.userMessages

      },
      fetchOrderList: (userId) => {
        console.log("flux.fetchOrderList");
        console.log("flux.fetchOrderList.env", process.env);
        console.log("flux.fetchOrderList.process.env.REACT_APP_URL2", process.env.REACT_APP_URL)
        const url = process.env.REACT_APP_URL+'/order/user/' + userId
        console.log("flux.fetchOrderList.url", url)
        const store = getStore();
        let regionList = []
      
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchOrderList.data", data);
            let ordersList = data;
            setStore({ ordersList: ordersList });
          })
          .catch((error) => {
            console.log("flux.fetchRegionList.error", error);
          });

          console.log("flux.fetchRegionList.departmentList", regionList);
        //if (ver == undefined) contacts = [];
        
      },      
      fetchRegionList: () => {
        console.log("flux.fetchRegionList");
        console.log("flux.fetchRegionList.env", process.env);
        console.log("flux.fetchRegionList.process.env.REACT_APP_URL2", process.env.REACT_APP_URL)
        const url = process.env.REACT_APP_URL+'/region'
        console.log("flux.fetchRegionList.url", url)
        const store = getStore();
        let regionList = []
      
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchRegionList.data", data);
            regionList = data;
            setStore({ regionList: regionList });
          })
          .catch((error) => {
            console.log("flux.fetchRegionList.error", error);
          });

          console.log("flux.fetchRegionList.departmentList", regionList);
        //if (ver == undefined) contacts = [];
        
      },
      fetchDepartmentList: () => {
        console.log("flux.fetchDepartmentList");
        console.log("flux.fetchDepartmentList.env", process.env);
        console.log("flux.fetchDepartmentList.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
        const url = process.env.REACT_APP_URL+'/department'
        console.log("flux.fetchDepartmentList.url", url)
        const store = getStore();
        let departmentList = []
      
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchDepartmentList.data", data);
            departmentList = data;
            setStore({ departmentList: departmentList });
          })
          .catch((error) => {
            console.log("flux.fetchDepartmentList.error", error);
          });

        console.log("flux.fetchDepartmentList.departmentList", departmentList);
        //if (ver == undefined) contacts = [];
        
      },
      fetchCategoryList: () => {
        console.log("flux.fetchCategoryList");
        console.log("flux.fetchCategoryList.env", process.env);
        console.log("flux.fetchCategoryList.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
        const url = process.env.REACT_APP_URL+'/category'
        console.log("flux.fetchDepartmentList.url", url)
        const store = getStore();
        let categoryList = []
      
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchCategoryList.data", data);
            categoryList = data;
            setStore({ categoryList: categoryList });
          })
          .catch((error) => {
            console.log("flux.fetchCategoryList.error", error);
          });

        console.log("flux.fetchCategoryList.categoryList", categoryList);
        //if (ver == undefined) contacts = [];
        
      },
      fetchSizeList: () => {
        console.log("flux.fetchSizeList");
        console.log("flux.fetchSizeList.env", process.env);
        console.log("flux.fetchSizeList.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
        const url = process.env.REACT_APP_URL+'/size'
        console.log("flux.fetchSizeList.url", url)
        const store = getStore();
        let sizeList = []    
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchSizeList.data", data);
            sizeList = data;
            setStore({ sizeList: sizeList });
          })
          .catch((error) => {
            console.log("flux.fetchSizeList.error", error);
          });
        console.log("flux.fetchSizeList.categoryList", sizeList);
      },
      fetchProductStateList: () => {
        console.log("flux.fetchProductStateList");
        console.log("flux.fetchProductStateList.env", process.env);
        console.log("flux.fetchProductStateList.process.env.REACT_APP_URL", process.env.REACT_APP_URL)

        const url = process.env.REACT_APP_URL+'/product-state'
        console.log("flux.fetchProductStateList.url", url)

        const store = getStore();
        let productStateList = []    
        
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchProductStateList.data", data);
            productStateList = data;
            setStore({ productStateList: productStateList });
          })
          .catch((error) => {
            console.log("flux.fetchProductStateList.error", error);
          });
        console.log("flux.fetchProductStateList.productStateList", productStateList);
      }, 
      fetchWeightUnitList: () => {
        console.log("flux.fetchWeightUnitList");
        console.log("flux.fetchWeightUnitList.env", process.env);
        console.log("flux.fetchWeightUnitList.process.env.REACT_APP_URL", process.env.REACT_APP_URL)

        const url = process.env.REACT_APP_URL+'/weightunit'
        console.log("flux.fetchProductStateList.url", url)

        const store = getStore();
        let weightUnitList = []    
        
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchWeightUnitList.data", data);
            weightUnitList = data;
            setStore({ weightUnitList: weightUnitList });
          })
          .catch((error) => {
            console.log("flux.fetchWeightUnitList.error", error);
          });
        console.log("flux.fetchWeightUnitList.weightUnitList", weightUnitList);
      },      
      fetchContacts: (url) => {
        console.log("flux.fetchContacts");
        console.log("flux.fetchContacts.url", url);

        //const store = getStore();
        let contacts = []; //store.contacts;
        let ver;
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchContacts.data", data);
            contacts = data;
            setStore({ contacts: contacts });
          })
          .catch((error) => {
            console.log("flux.fetchContacts.error", error);
          });

        console.log("flux.fetchContacts.contacts", contacts);
        //if (ver == undefined) contacts = [];

        setStore({ contacts: contacts });
      },

      addContact: (contact) => {
        console.log("flux.addContact");
        const store = getStore();

        //contact.id = Math.floor(Math.random() * 9999999999);
        console.log("flux.addContact.contact", contact);
        console.log(store.contacts);
        let contacts = store.contacts;

        let data = {};
        fetch(" https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log("flux.addContact.data 1:", data);
            contacts.push(data);
            contact = data;
            setStore({ contacts: contacts });
          })
          .catch((error) => {
            console.log("flux.addContact.error", error);
          });

        console.log("flux.addContact.data 2:", data);
        //if (!contacts) contacts = [contact];
        //else contacts.push(data);

        console.log("addContact.contacts", contacts);
        console.log("addContact.contact", contact);

        return data;
      },

      deleteContact: (contact) => {
        console.log("flux.deleteContent");
        console.log(contact);
        const store = getStore();

        fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((resp) => {
          console.log(resp.status);

          let contacts = store.contacts;
          let newContacts = contacts.filter((c) => c !== contact);
          console.log("newContacts", newContacts);
          setStore({ contacts: newContacts });
          console.log("store.contacts", store.contacts);
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
      },

      editContact: (contact) => {
        console.log("flux.editContact");
        console.log("flux.editContact.contact", contact);

        const store = getStore();
        console.log("store.contacts", store.contacts);

        let data = {};
        fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log("flux.editContact.data 1:", data);
            //contacts.push(data);
            //						contact = data;

            let newContacts = store.contacts.map((c) => {
              if (c.id === contact.id) {
                return contact;
              }
              return c;
            });
            console.log("flux.editContact.newContacts", newContacts);
            setStore({ contacts: newContacts });

            //setStore({ contacts: contacts });
          })
          .catch((error) => {
            console.log("flux.editContact.error", error);
          });

        console.log("flux.editContact.data 2:", data);
        //if (!contacts) contacts = [contact];
        //else contacts.push(data);
      },
    },
  };
};

export default getState;