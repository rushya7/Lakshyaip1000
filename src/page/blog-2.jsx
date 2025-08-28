import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Archive from "../component/sidebar/archive";
import Instagram from "../component/sidebar/instagram";
import Pagination from "../component/sidebar/pagination";
import PopularPost from "../component/sidebar/popular-post";
import PostCategory from "../component/sidebar/post-category";
import Search from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";

let blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Business Ueporting Rouncil Them Could Plan.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Financial Reporting Qouncil What Could More.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Consulting Reporting Qounc Arei Could More.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/04.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Strategic Social Media and of visual design.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/05.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Find the Right Path for your Group Course online.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/06.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Learn by doing with Real World Projects other countries.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/07.jpg',
        imgAlt: 'Blog Thumb',
        title: 'The Importance Of Intrinsic for Students.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/08.jpg',
        imgAlt: 'Blog Thumb',
        title: 'A Better Alternative To Grading Student Writing.',
        desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'Rajib Raj',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
]



const BlogPageTwo = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Our Blog Classic Posts'} curPage={'Blog classic'} />

            <h1 className="text-5xl font-bold text-center text-blue-600 my-8 drop-shadow-lg">
                Event Details </h1>

            <Footer />
        </Fragment>
    );
}

export default BlogPageTwo;