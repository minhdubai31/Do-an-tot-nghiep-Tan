/*
Hướng dẫn thêm sản phẩm vào itemList

Một sản phẩm bao gồm 4 thành phần:

    "<mã sản phẩm>": {
        "name": "<tên sản phẩm>",
        "price": "<giá sản phẩm>",
        "photo": "<đường dẫn chỉ đến ảnh sản phẩm>"
    }


1. Mã sản phẩm:
    Một mã sản phẩm có định dạng như sau:

    "<tính chất><mã số>"

    Trong đó:
        Tính chất:
            men = sản phẩm cho nam
            lady = sản phẩm cho nữ
            hot = sản phẩm bán chạy
            new = sản phẩm mới
            (Lưu ý: Có thể kết hợp các tính chất nếu cần
            VD: 
                Sản phẩm vừa cho nam, vừa bán chạy "men-hot"
                Sản phẩm vừa cho nam, vừa cho nữ, vừa mới: "men-lady-new"
            )
        Mã số: là số tự nhiên bất kỳ
    
    *Lưu ý: không đặt mã sản phẩm trùng nhau.

2. Tên sản phẩm.

3. Giá sản phẩm:
    Là số tự nhiên viết liền không ngăn cách nhau bằng dấu cách chấm hoặc phẩy,...

4. Đường dẫn chỉ đến ảnh sản phẩm:
    Có thể là đường dẫn local hoặc đường dẫn ảnh bất kỳ copy trên internet
*/
var itemList={
    "newhot1":{ 
        "name":"Biti's Hunter x THE BATMAN",
        "price":1521000,
        "photo":"https://product.hstatic.net/1000230642/product/82ea49295c75932bca64_fb6f1517daaf46c399bd161d94c12ed7.jpg"
    },
    "new2":{ 
        "name":"Biti's Hunter x Marvel Spider-man",
        "price":1425950,
        "photo":"https://product.hstatic.net/1000230642/product/artboard_1-100_c6cd15bd196d4f4aa2dc869c2d02920d.jpg"
    },
    "new3":{
        "name":"Jordan Delta 3 Mid",
        "price":4409000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/47dfb42d-c70d-4bbe-b989-452fcfc75207/jordan-delta-3-mid-shoes-WwnTQl.png"
    },
    "newhot4":{
        "name":"Zoom Freak 4 'Letter Bros'",
        "price":3669000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9aebc8ec-d0b1-4029-b0ea-5759acc98dba/zoom-freak-4-letter-bros-basketball-shoes-zmXv3D.png"
    },
    "newhot5":{
        "name":"NikeCourt Air Zoom Vapor Pro",
        "price":3519000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/118a4c51-41b0-4f92-8aa9-9ce89476a98d/nikecourt-air-zoom-vapor-pro-hard-court-tennis-shoe-1p8ZgF.png"
    },
    "newhot6":{
        "name":"ZoomX Zegama",
        "price":4409000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fad81b09-baf2-4920-bfcf-e1e89a97d06b/zoomx-zegama-trail-running-shoes-LhRsM7.png"
    },
    "menhot7":{
        "name":"Air Jordan XXXVII PF",
        "price":5439000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/087d5bc8-c714-4f90-9bbe-36c50c7eab77/air-jordan-xxxvii-pf-basketball-shoes-rthNXn.png"
    },
    "men8":{
        "name":"Metcon 8 AMP",
        "price":4109000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75d37d05-a9bc-490a-b5fc-fd3baffbdb94/metcon-8-amp-training-shoes-7VTNbS.png"
    },
    "men9":{
        "name":"Air Max Impact 4",
        "price":2649000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7bd37050-cf54-4ca8-a0ab-7140de9bf991/air-max-impact-4-basketball-shoes-CcJxBx.png"
    },
    "new10":{
        "name":"Air Kukini SE",
        "price":4109000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3d65d7d9-8f0e-413f-8d0b-3f72f1ccecdb/air-kukini-se-shoes-mGmph3.png"
    },
    "men11":{
        "name":"Air Huarache Crater Premium",
        "price":4109000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/198f957e-7a2f-4bfd-8e33-0d4dda3b502f/air-huarache-crater-shoes-PzhqmB.png"
    },
    "lady12":{
        "name":"Jumpman Two Trey",
        "price":4409000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/fb4da480-42e2-4daa-b75c-dc88e719e9e4/jumpman-two-trey-shoes-rhmBzG.png"
    },
    "new13":{
        "name":"React Infinity Run Flyknit 3",
        "price":5279000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/343fd443-412e-41bb-8f9e-95b32b62e19a/custom-nike-react-infinity-run-3-by-you.png"
    },
    "men14":{
        "name":"Zoom Mercurial Vaper 15 Elite FG",
        "price":8219000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0bf5223f-133a-444d-b095-33975925a978/custom-nike-zoom-mercurial-vapor-15-elite-by-you.png"
    },
    "hotlady15":{
        "name":"Air Max By You",
        "price":5589000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6e3033f-400f-40b4-9b85-cfc93b18ce56/custom-nike-air-max-97-by-you.png"
    },
    "hotlady16":{
        "name":"Oneonta",
        "price":1909000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d58a83b-c839-4b4a-bf3a-dc7a755c305f/oneonta-sandals-hb3phr.png"
    },
    "men17":{
        "name":"Air Jordan 6 Retro",
        "price":5589000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a412738-c878-43a3-af4d-a372c6291563/air-jordan-6-retro-shoes-4m3b9d.png"
    },
    "menlady18":{
        "name":"Air Jordan 3 Retro",
        "price":5589000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1693941-d709-4840-8442-0f8cc0195b2b/air-jordan-3-retro-shoes-TJf2lm.png"
    },
    "newhot19":{
        "name":"Air Max Terascape 97",
        "price":5589000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d9d80ba-42aa-4726-a276-416bf50a4d03/air-max-terrascape-97-shoes-3cGxRv.png"
    },
    "men20":{
        "name":'Luka 1 "Next Nature" PF',
        "price":3239000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/721f7f93-0f2a-4cbf-baf4-72c841f60c21/luka-1-next-nature-pf-basketball-shoes-szjnCq.png"
    },
    "menhot21":{
        "name":'ACG Mountain Fly Low SE',
        "price":4409000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/703e8bba-2a1b-4efe-98bc-9ec923174c5b/acg-mountain-fly-low-se-shoes-PFCvHS.png"
    },
    "lady22":{
        "name":'Air Trainer 1',
        "price":3829000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e73338e1-7967-49e7-9a40-1b41def25659/air-trainer-1-shoes-r74Kcn.png"
    },
    "menlady22":{
        "name":'Vaporfly NEXT% 2',
        "price":6609000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93536e83-3116-4e49-81b5-fa66060473d8/vaporfly-next-2-road-racing-shoes-D4ntS0.png"
    },
    "lady23":{
        "name":'ZoomX Invincible Run Flyknit 2',
        "price":5279000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f10d10c2-352b-48ed-a72a-f3cacfeee210/zoomx-invincible-run-flyknit-2-road-running-shoes-xrCMmF.png"
    },
    "new24":{
        "name":'M2K Tekno SP',
        "price":3829000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0m8qwgt2dmhouabjyc3/m2k-tekno-sp-shoes-HPc8RX.png"
    },
    "menhot25":{
        "name":'Hyperdunk SP',
        "price":3829000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rksfro2vatbpmnuii5md/hyperdunk-ep-basketball-shoes-J050xp.png"
    },
    "hotlady26":{
        "name":'Cosmic Unity 2',
        "price":4409000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7eb7999b-bd65-4da5-a1e3-7e16653ad430/cosmic-unity-2-basketball-shoes-S6n2s3.png"
    },
    "new27":{
        "name":"Zoom Freak 4 'Bahamas'",
        "price":3959000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a830cd8e-8b86-436c-8437-a00255af3f25/zoom-freak-4-bahamas-basketball-shoes-2qvDHd.png"
    },
    "men28":{
        "name":"Kyrie Low 5 EP",
        "price":3239000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6cadcd46-c87e-402d-9268-e59d977e7d3c/kyrie-low-5-ep-basketball-shoes-kR6wcp.png"
    },
    "men29":{
        "name":"Air Jordan XXXVI Low Luka PF",
        "price":5129000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ca5f5598-3d5b-4747-aba2-b8803f9807c5/air-jordan-xxxvi-low-luka-pf-basketball-shoes-zNLHjc.png"
    },
    "new30":{
        "name":"LeBron Witness 7 EP",
        "price":2929000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e91d1de-cfdc-41f2-814f-e3f54e73f12c/lebron-witness-7-ep-basketball-shoes-FKPXCg.png"
    },
    "lady31":{
        "name":"Jordan Delta Low",
        "price":4109000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f016baf-3f8b-4eb1-89e1-7a70a1eefce2/jordan-delta-3-low-shoes-fQrm6Q.png"
    },
    "menlady32":{
        "name":"Metcon 8 AMP",
        "price":4109000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75d37d05-a9bc-490a-b5fc-fd3baffbdb94/metcon-8-amp-training-shoes-7VTNbS.png"
    },
    "menlady33":{
        "name":"SuperRep Cycle 2 Next Nature",
        "price":3519000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e577224c-180e-483f-bbc8-1fae2d6b9a92/superrep-cycle-2-next-nature-indoor-cycling-shoes-ZhSL67.png"
    },
    "lady34":{
        "name":"Wafle Debut",
        "price":2069000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8607e969-a574-40f5-bfe2-aa7f912bbeb5/waffle-debut-shoes-JRWJk7.png"
    },
    "lady35":{
        "name":"Air Zoom Pegasus 39 A.I.R Hola Lou",
        "price":3829000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc8e8ae1-5e2a-40ac-b8ba-77515d72ecb6/air-zoom-pegasus-39-air-hola-lou-road-running-shoes-HzV9f8.png"
    },
    "lady36":{
        "name":"Dunk Low Unlocked",
        "price":4409000,
        "photo":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b13b1f5b-33c7-4390-9c4c-d89f8e120eae/custom-nike-dunk-unlocked-by-you.png"
    }
};