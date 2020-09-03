import React, {useState, useEffect} from 'react';
import { Media,  Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderDirectoryItem({ course, deleteFavorite }) {
    return (
        <Media tag="li">
            <Media left middle>
                <Media object src={baseUrl + course.image} alt={course.title} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{course.image}</Media>
                <p>{course.title}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(course._id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </Media>
        </Media>
    );
}

const Favorites = props => {

    const [favState , setFavState] = useState(props);
    console.log("In Favorites");
    console.log("favState");
    console.log(favState.favorites)
    console.log("props");
    console.log(props.favorites.favorites)


    console.log("In Favorites");
    // console.log(props.favorites.favorites[0].courses.length)
    // props.favorites.favorites.forEach(ele => console.log(ele))
        if (props.favorites.favorites && props.favorites.favorites.courses.length > 0) {
            const favorites = props.favorites.favorites.courses.map(course => {
            return (
                <div key={course._id} className="col-12 mt-5">
                    <RenderDirectoryItem course={course} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Media list>
                        {favorites}
                    </Media>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <h4>You have no favorites selected.</h4>
                </div>
            </div>
        )
    }
}

export default Favorites;