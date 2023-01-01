import casualImage from './../src/images/casual-cover.jpg';
import casualCat from './../src/images/casual-cat.jpg';
import lisa from './images/lisa.jpg';
import freddie from './images/freddie.jpg';
import russel from './images/russel.jpg';
import categoryCasual from './images/category-casual.jpg';
import categoryActive from './images/category-active.jpg';
import categoryLeather from './images/category-leather.jpg';
import activeCover from './images/active-cover.jpg';
import leatherCover from './images/leather-cover.jpg';

const sliderItems = [
	{
		id: 1,
		img: `${casualImage}`,
		title: 'CASUAL WEARS',
		desc: "DON'T COMPROMISE ON STYLE! GET CUSTOMIZED DESIGNS FOR YOUR BRAND",
		bg: 'DFF6FF',
	},
	{
		id: 2,
		img: `${activeCover}`,
		title: 'ACTIVE WEARS',
		desc: 'MADE WITH PREMIUM QUALITY FABRICS TO ENDURE ANY WORKOUT!',
		bg: 'A2DBFA',
	},
	{
		id: 3,
		img: `${leatherCover}`,
		title: 'LEATHER WEARS',
		desc: 'FINEST QUALITY LEATHER USED TO GET PREMIUM FASHION AND LUXURY!',
		bg: 'C0FEFC',
	},
];

const navigation = [
	{ id: 1, name: 'HOME', path: '/' },
	{
		id: 2,
		name: 'ABOUT',
		path: '/about',
	},
	{
		id: 3,
		name: 'PRODUCTS',
		path: '#',
	},
	{
		id: 4,
		name: 'CUSTOM ORDER',
		path: '/customorder',
	},
	{
		id: 5,
		name: 'CONTACT US',
		path: '/contact',
	},
	{
		id: 6,
		name: 'HELP',
		path: '/help',
	},
];

const productsDropdown = [
	{ id: 1, name: 'CASUAL WEAR', path: '/casualwear', img: `${categoryCasual}` },
	{ id: 2, name: 'ACTIVE WEAR', path: '/activewear', img: `${categoryActive}` },
	{ id: 3, name: 'LEATHER WEAR', path: '/leatherwear', img: `${categoryLeather}` },
];

const popularProducts = [
	{
		id: 1,
		mainCategory: 'CASUALWEAR',
		subCategory: 'T-shirts',
		productName: 'Roundneck T-shirt',
		article: 'TC-07',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 2,
		mainCategory: 'CASUALWEAR',
		subCategory: 'T-shirts',
		productName: 'V-neck T-shirt',
		article: 'TC-08',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 3,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Sweatshirts',
		productName: 'Plain Sweatshirt',
		article: 'TC-09',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 4,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Sweatshirts',
		productName: 'Camo Sweatshirt',
		article: 'TC-10',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 5,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Leggings',
		productName: 'Plain Legging',
		article: 'TC-11',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 6,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Leggings',
		productName: 'Sublimated Legging',
		article: 'TC-12',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 7,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Fitness Shorts',
		productName: 'Loose fit Shorts',
		article: 'TC-13',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 8,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Fitness Shorts',
		productName: 'Double Shorts',
		article: 'TC-14',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
];

const subCat = [
	{
		id: 1,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
	{
		id: 2,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
	{
		id: 3,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
	{
		id: 4,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
	{
		id: 5,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
	{
		id: 6,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
	{
		id: 7,
		name: 'HOODIES',
		img: `${casualImage}`,
	},
];

const HoodieList = [
	{
		id: 1,
		article: 'TC-01',
		img: `${casualImage}`,
	},
	{
		id: 2,
		article: 'TC-02',
		img: `${casualImage}`,
	},
	{
		id: 3,
		article: 'TC-03',
		img: `${casualImage}`,
	},
	{
		id: 4,
		article: 'TC-04',
		img: `${casualImage}`,
	},
	{
		id: 5,
		article: 'TC-05',
		img: `${casualImage}`,
	},
	{
		id: 6,
		article: 'TC-06',
		img: `${casualImage}`,
	},
];

const allProducts = [
	{
		id: 1,
		cat: 'HOODIES',
		name: 'PULLOVER HOODIE',
		img: `${casualImage}`,
		art: 'TC-01',
	},
	{ id: 2, cat: 'Hoodies', name: 'Printed HOODIE', img: `${casualImage}`, art: 'TC-02' },
	{
		id: 3,
		cat: 'HOODIES',
		name: 'SUBLIMATED HOODIE',
		img: `${casualImage}`,
		art: 'TC-03',
	},
	{
		id: 4,
		cat: 'TRACKSUITS',
		name: 'Tracksuit',
		img: `${casualImage}`,
		art: 'TC-04',
	},
	{
		id: 5,
		cat: 'JOGGERS',
		name: 'Jogger',
		img: `${casualImage}`,
		art: 'TC-05',
	},
];

const ReviewData = [
	{
		img: `${freddie}`,
		client: 'Freddie Long',
		review: 'I was looking for a custom clothing manufacturer and I am very happy that I found Trade City. Very satisfied!',
	},
	{
		img: `${lisa}`,
		client: 'Lisa',
		review: 'Awesome Work done by the team! I am ordering again!',
	},
	{
		img: `${russel}`,
		client: 'Russel',
		review: 'Finally found the perfect manufacturer! On time delivery and I am really satisfied by the quality!',
	},
];

const finalData = [
	{
		id: 1,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Hoodies',
		productName: 'Pullover Hoodie',
		article: 'TC-01',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 2,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Hoodies',
		productName: 'Zipper Hoodie',
		article: 'TC-02',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 3,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Joggers',
		productName: 'Cotton Joggers',
		article: 'TC-03',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 4,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Joggers',
		productName: 'Slim-fit Joggers',
		article: 'TC-04',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 5,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Tracksuits',
		productName: 'Cotton Tracksuits',
		article: 'TC-05',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 6,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Tracksuits',
		productName: 'Polyester Tracksuits',
		article: 'TC-06',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 7,
		mainCategory: 'CASUALWEAR',
		subCategory: 'T-shirts',
		productName: 'Roundneck T-shirt',
		article: 'TC-07',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 8,
		mainCategory: 'CASUALWEAR',
		subCategory: 'T-shirts',
		productName: 'V-neck T-shirt',
		article: 'TC-08',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 9,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Sweatshirts',
		productName: 'Plain Sweatshirt',
		article: 'TC-09',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 10,
		mainCategory: 'CASUALWEAR',
		subCategory: 'Sweatshirts',
		productName: 'Camo Sweatshirt',
		article: 'TC-10',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 11,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Leggings',
		productName: 'Plain Legging',
		article: 'TC-11',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 12,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Leggings',
		productName: 'Sublimated Legging',
		article: 'TC-12',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 13,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Fitness Shorts',
		productName: 'Loose fit Shorts',
		article: 'TC-13',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 14,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Fitness Shorts',
		productName: 'Double Shorts',
		article: 'TC-14',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 15,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Tank Tops',
		productName: 'Dryfit Tank top',
		article: 'TC-15',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 16,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Tank Tops',
		productName: 'Tank top',
		article: 'TC-16',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 17,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Sports Bra',
		productName: 'Sports Bra',
		article: 'TC-17',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 18,
		mainCategory: 'ACTIVEWEAR',
		subCategory: 'Sports Bra',
		productName: 'Sports Bra',
		article: 'TC-18',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},

	{
		id: 19,
		mainCategory: 'LEATHERWEAR',
		subCategory: 'Jackets',
		productName: 'Leather Jacket',
		article: 'TC-19',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
	{
		id: 20,
		mainCategory: 'LEATHERWEAR',
		subCategory: 'Jackets',
		productName: 'Leather Jacket',
		article: 'TC-20',
		subCategoryImg: `${casualImage}`,
		productImg: `${casualImage}`,
	},
];

export default sliderItems;
export { navigation, productsDropdown, popularProducts, subCat, HoodieList, allProducts, ReviewData, finalData };
