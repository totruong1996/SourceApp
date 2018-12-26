import *  as types from './types'
 const listFood = [
    {
        status: "Đang mở cửa ",
        star: 3,
        name:"Food House - Phan Xích Long",
        price: "30.000đ - 200.000đ",
        date: "22/10/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Tuấn Đặng",
        opentime : "Đang mở cửa 10:00 - 22:00",
        service : "Buffe , Hotspot, Drink",
        email:  "tientv@gmail.com",
        phone: "0888 903 333",
        address : "133 - 135 Phan Xích Long, P. 7,  Quận Phú Nhuận, Hồ Chí Minh",
        detail:"Cả ngày  - Giảm 23% Buffet UFO giá 189k còn 145k/ người. Chương trình bắt đầu từ ngày 22/10 - 28/11.",
        images:[require('../../images/food/foodhouse.jpg'), require('../../images/food/foodhouse1.jpg'), require('../../images/food/foodhouse1.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"Oia Castle Bistro & Cafe - Tôn Thất Đạm",
        price: "30.000đ - 200.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Tuấn Đặng",
        opentime : "Đang mở cửa  08:00 - 22:00 ",
        service : "Nacho cheese, Cheese quesadillas, Meat Souvlaki, Lamb Chop,...",
        email:  "tuandangminhttt.@gmail.com",
        phone: "1900 9999",
        address:"119 Tôn Thất Đạm, P. Bến Nghé,  Quận 1, Hồ Chí Minh",
        detail : "Tọa lạc trên trên 22/15 Nguyễn Văn Cừ , Quận 5 , CoupleHouse đang được nhiều khách chú ý với không gian yên tĩnh , thoải mái. Đây là nơi để các cặp đôi tìm đến để dành cho nhau những giây phút lãng mạn.",
        images:[require('../../images/food/oiacastle.jpg'),require('../../images/food/oiacastle1.jpg'), require('../../images/food/oiacastle2.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"Michi Sushi - Nguyễn Huệ",
        price: "39.000đ - 265.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Tuấn Đặng",
        opentime : "Đang mở cửa  11:00 - 22:00",
        service : "Sake sashimi, Nigiri sake, Nigiri unagi, Nissin sashimi, Chawanmishi,...",
        email:  "tuandangminhttt.@gmail.com",
        phone: "1900 9999",
        address : "Tầng 7,  42 Nguyễn Huệ, (Tầng 7 - Số Nhà 73), P. Bến Nghé,  Quận 1, Hồ Chí Minh",
        detail: "Cả ngày  - Giảm 25% hóa đơn thức ăn khi đặt chỗ qua Travel - Áp dụng từ ngày 29/10 - 11/11/2018.",
        images:[require('../../images/food/michisushi.jpg'), require('../../images/food/michisushi1.jpg'), require('../../images/food/michisushi2.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"TukTuk Thai Bistro - Lê Thánh Tôn",
        price: "100.000đ - 300.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Thái, Món Á - Gia đình, Nhóm hội",
        author : "Tuấn Đặng",
        opentime : "Đang mở cửa  10:00 - 22:30",
        service : "Gỏi cá trê, Cơm chiên tomyum, miến, Mực, Nghêu xào,...",
        email:  "tuandangminhttt.@gmail.com",
        phone: "1900 9999",
        address : "T17/11 Lê Thánh Tôn (Mặt Tiền),  Quận 1, Hồ Chí Minh",
        detail: "Cả ngày  - Giảm 10% tổng hóa đơn khi đặt chỗ qua Travel - Nhà hàng có phụ thu 10% VAT và 5% phí phục vụ.",
        images:[require('../../images/food/tuktuk.jpg'), require('../../images/food/tuktuk1.jpg'), require('../../images/food/tuktuk2.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"D'Maris - Buffet Cao Cấp - Pico Lotte",
        price: "300.000đ - 600.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Tuấn Đặng",
        opentime : "Đang mở cửa  11:30 - 22:00",
        service : "Sea food,Beefsteak buffe, Hotspot, Dink, Wine,...",
        email:  "tuandangminhttt.@gmail.com",
        phone: "1900 9999",
        address : "Tầng 5 Pico Plaza, 20 Cộng Hòa, P. 13,  Quận Tân Bình, Hồ Chí Minh",
        detail: "Ăn trưa  - T2 ~ T6, Giảm 15% Buffet trưa giá 385k còn 328k - Giá trên đã bao gồm VAT và các loại nước trái cây, cafe, nước mía. Không bao gồm rượu, bia, nước ngọt.",
        images:[require('../../images/food/dma.jpg'), require('../../images/food/dma1.jpg'), require('../../images/food/dma2.jpg')]

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"Hao Yu - Grilled Fish Restaurant",
        price: "50.000đ - 500.000đ",
        date: "22/12/2018",
        category : "Nhà hàng - Món Việt, Món Á - Gia đình, Nhóm hội",
        author : "Tuấn Đặng",
        opentime : "Đang mở cửa  11:00 - 14:00 | 17:00 - 22:00",
        service : "Beef, Fish, Drink,Topping,Mushroom,...",
        email:  "tuandangminhttt.@gmail.com",
        phone: "1900 9999",
        address : "17-19 Hồ Xuân Hương, P. 6,  Quận 3, Hồ Chí Minh",
        detail: "Cả ngày  - Giảm 15% tổng hóa đơn khi đặt chỗ qua Travel - Không áp dụng chung với voucher và các chương trình ưu đãi khác.",
        images:[require('../../images/food/haoyu.jpg'), require('../../images/food/haoyu1.jpg'), require('../../images/food/haoyu2.jpg')]
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