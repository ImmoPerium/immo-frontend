import React from "react";
import { Redirect }  from "react-router-dom";

export default class NavbarMenuUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToExplore: false,
      redirectToOffer: false,
      redirectToFavorites: false,
    };
  }

  redirectTo = (view_name) => {
    switch (view_name) {
      case "explore":
        return this.setState({ redirectToExplore: true }, () => this.setState({ redirectToExplore: false }));
      case "offer":
        return this.setState({ redirectToOffer: true }, () => this.setState({ redirectToOffer: false }));
      case "favorites":
        return this.setState({ redirectToFavorites: true }, () => this.setState({ redirectToFavorites: false }));
      default:
        return "";
    }
  }

  render(props) {
    return (
      <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0 select-none">

        {this.state.redirectToExplore ? 
          <Redirect to='/explore' /> : ""}

        {this.state.redirectToOffer ? 
          <Redirect to='/offer' /> : ""}

        {this.state.redirectToFavorites ? 
          <Redirect to='/favorites' /> : ""}

        <div
          onClick={() => this.redirectTo("explore")}
          className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200 cursor-pointer"
        >
          Entdecke Immobilien
        </div>
        <div
          onClick={() => this.redirectTo("offer")}
          className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200 cursor-pointer"
        >
          Immobilie anbieten
        </div>
        <div
          onClick={() => this.redirectTo("favorites")}
          className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200 cursor-pointer"
        >
          Favoriten
        </div>
        <a
          href="#"
          className="mt-1 block px-3 py-1 rounded font-semibold text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 cursor-default"
        >
          {this.props && this.props.user.firstname ? `Moin, ${this.props.user.firstname}` : "Moin"}
        </a>
      </div>
    );
  }
}