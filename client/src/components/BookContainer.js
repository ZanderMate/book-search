import React, { Component } from 'react';
import Saved from './pages/Saved'
import Search from './pages/Search'
import Navbar from './Navbar';
import Row from './Row'
import Container from './Container';
import Header from './Header';


export default class BookContainer extends Component {
    state = {
        currentPage: 'Search'
    };

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    renderpage = page => {
        if (this.state.currentPage === 'Saved') {
            return <Saved />;
        }
        else if (this.state.currentPage === 'Search') {
            return <Search />
        }
    }

    render() {
        return (
            <div>
                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                <Container>
                    <Header />
                </Container>
                    {this.renderpage(this.state.currentPage)}
            </div>
        )
    }
}