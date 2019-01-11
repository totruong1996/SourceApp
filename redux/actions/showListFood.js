import *  as types from './types'
 const listFood = [
    {
        status: "Đang mở cửa ",
        star: 3,
        name:"Food House - Phan Xích Long",
        price: "30.000đ - 200.000đ",
        date: "22/10/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Tiến Trương",
        opentime : "Đang mở cửa 10:00 - 22:00",
        service : "Buffe , Hotspot, Drink",
        email:  "tientv@gmail.com",
        phone: "0888 903 333",
        address : "133 - 135 Phan Xích Long, P. 7,  Quận Phú Nhuận, Hồ Chí Minh",
        detail:"Cả ngày  - Giảm 23% Buffet UFO giá 189k còn 145k/ người. Chương trình bắt đầu từ ngày 22/10 - 28/11.",
        images:[require('../../images/food/foodhouse1.jpg'), require('../../images/food/foodhouse.jpg'), require('../../images/food/foodhouse1.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"Oia Castle Bistro & Cafe - Tôn Thất Đạm",
        price: "30.000đ - 200.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Chương Nguyễn",
        opentime : "Đang mở cửa  08:00 - 22:00 ",
        service : "Nacho cheese, Cheese quesadillas, Meat Souvlaki, Lamb Chop,...",
        email:  "nvtchuong.@gmail.com",
        phone: "1900 9999",
        address:"119 Tôn Thất Đạm, P. Bến Nghé,  Quận 1, Hồ Chí Minh",
        detail : "Tọa lạc trên trên 22/15 Nguyễn Văn Cừ , Quận 5 , CoupleHouse đang được nhiều khách chú ý với không gian yên tĩnh , thoải mái. Đây là nơi để các cặp đôi tìm đến để dành cho nhau những giây phút lãng mạn.",
        images:[require('../../images/food/oiacastle.jpg'),require('../../images/food/oiacastle1.jpg'), require('../../images/food/oiacastle.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"Michi Sushi - Nguyễn Huệ",
        price: "39.000đ - 265.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Chương Nguyễn",
        opentime : "Đang mở cửa  11:00 - 22:00",
        service : "Sake sashimi, Nigiri sake, Nigiri unagi, Nissin sashimi, Chawanmishi,...",
        email:  "nvtchuong.@gmail.com",
        phone: "1900 9999",
        address : "Tầng 7,  42 Nguyễn Huệ, (Tầng 7 - Số Nhà 73), P. Bến Nghé,  Quận 1, Hồ Chí Minh",
        detail: "Cả ngày  - Giảm 25% hóa đơn thức ăn khi đặt chỗ qua Travel - Áp dụng từ ngày 29/10 - 11/11/2018.",
        images:[require('../../images/food/michisushi.jpg'), require('../../images/food/michisushi1.jpg'), require('../../images/food/michisushi.jpg')]

    }
]
const showListFood  = () =>{
    const action = dispatch =>{
        if(listFood){
            dispatch(setListFood(listFood))
            return listFood;
        }
    }
    return action;
}
const setListFood = (listFood)=>{
    return {
        type : types.LIST_FOOD,
        listFood,
    }
}

export {
    showListFood,
    setListFood
}