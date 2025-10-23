export function formatCurrency(value: number) {
    return new Intl.NumberFormat("vi-VN").format(value);
}

export function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("vi-VN", options);
}

export const generateOrderId = (): string => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2); // Lấy 2 số cuối của năm
    const timestamp = `${day}${month}${year}`; // Tạo timestamp dạng DDMMYY
    const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `KV-${timestamp}-${randomString}`; // Format: KV-DDMMYY-XXXX
};

export const getPaymentMethodLabel = (method: string) => {
    switch (method) {
        case "cod":
            return "Thanh toán khi nhận hàng";
        case "credit":
            return "Thanh toán qua chuyển khoản ngân hàng";
        default:
            return "Không xác định";
    }
};