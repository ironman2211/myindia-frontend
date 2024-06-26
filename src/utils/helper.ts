export const getDiscountedPricePercentage = ({ originalPrice, discountedPrice }: { originalPrice: number, discountedPrice: number }) => {
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount / originalPrice) * 100;

    return Math.round(discountPercentage);
};
