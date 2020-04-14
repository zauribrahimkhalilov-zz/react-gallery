import React, { Component } from 'react';
import Image from './Image';
import axios from 'axios';
import { URL } from '../../utils/url';
import { API_KEY } from '../../utils/apikey';

class ImageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allimages: [],
            images: [],
            pagesize: 30,
            height: window.innerHeight
        };
    }

    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.loadmoreItem();
        }
    }

    componentDidMount() {

        window.addEventListener("scroll", this.handleScroll);

        const { pagesize } = this.state;

        axios.get(URL + API_KEY + "&query=city&orientation=landscape").then(res => {
            this.setState({
                allimages: res.data.results,
                images: res.data.results.slice(0 * pagesize, (0 + 1) * pagesize)
            });
        });

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    loadmoreItem = () => {

        const { allimages, pagesize } = this.state;
        this.setState({ images: allimages.slice(0, pagesize + 6), pagesize: pagesize + 5 });

    }

    render() {

        const { images } = this.state;

        if (images.length === 0) {
            return <div className="text-center"><h1>Loading...</h1></div>;
        }

        return (
            <Image
                images={images}
            />
        );
    }

}
export default ImageList;