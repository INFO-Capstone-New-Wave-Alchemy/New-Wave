import React from 'react';

function PageHeader(props) {      
    return (
        <header>
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/chat">Chat</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default PageHeader;