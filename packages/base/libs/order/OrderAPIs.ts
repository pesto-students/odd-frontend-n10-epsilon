/* eslint-disable class-methods-use-this */
// eslint-disable-next-line class-methods-use-this
import { BaseClient } from '..';

class OrderAPIs extends BaseClient {

    public static getOrderData(orderId: string) {

        const dummyOrder = {
            _id: orderId,
            create_at: "10101997020301",
            payment_id: "00000011111",
            payment_status: "completed",
            user_id: "10101010",
            driver_id: "52525252",
            vehicle_id: "000202020",
            status: "accepted", // "opened accepted inprogress completed",
            track_history: [
                {
                    _id: "",
                    status: "",
                    time: "",
                    location: "",
                },
            ],
            pick_otp: "123456",
            drop_otp: "654321",
            pick_time: "",
            drop_time: "",
            pick_info: {
                _id: "",
                location: {
                    lat: "",
                    long: "",
                },
                add_1: "B-11,Fasil Road (Delhi)",
                add_2:
                    "3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India",
                contact_name: "",
                contact_number: "",
                instructions: "",
            },
            drop_info: {
                _id: "",
                location: {
                    lat: "",
                    long: "",
                },
                add_1: "3941,Naya Bazar Road (Delhi)",
                add_2:
                    "3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India",
                contact_name: "",
                contact_number: "",
                instructions: "",
            },
        };

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(JSON.stringify(dummyOrder));
            }, 1000);
        });
    }
}

export default OrderAPIs;
