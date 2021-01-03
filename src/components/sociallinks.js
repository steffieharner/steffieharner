import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function ListItem(props) {
    const data = props.data;

    return (
        <a href={data.url} title={data.name} target="_blank">
            <li>
                <img className="icon-social" src={data.icon} alt={data.name} />
            </li>
        </a>
    );
}

export default function() {
    const data = useStaticQuery(graphql`
        query SocialQuery {
            site {
                siteMetadata {
                    social {
                        name
                        url
                        icon
                    }
                }
            }
        }
    `);

    const items = data.site.siteMetadata.social;
    let list = [];
    items.forEach(function(e, i) {
        list.push(<ListItem key={e.url + "-" + e.icon + "-" + i} data={e} />);
    });
    return <ul className="social-links">{list}</ul>;
}
