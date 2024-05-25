export interface SalesAPIResponse {
    productSales: ProductSales[]
}

export interface ProductSales {
    brand: string;
    details: string[];
    id: string;
    image: string;
    retailer: string;
    reviews: CustomerReview[];
    sales: WeeklySales[];
    subtitle: string;
    tags: string[];
    title: string;
}

export interface CustomerReview {
    customer: string;
    review: string;
    score: number;
}

export interface WeeklySales {
    retailSales: number;
    retailerMargin: number;
    unitsSold: number;
    weekEnding: string;
    wholesaleSales: number;
}