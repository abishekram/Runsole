import * as React from "react";
import {Navigation} from "baseui/side-navigation";
import APIContext from "./APIContext";
import {Block} from "baseui/block";

const SideNavigation = () => {
    const [activeItemId, setActiveItemId] = React.useState(
        "#Introduction"
    );
    const api = React.useContext(APIContext);

    function convertForNav(tagsGroup) {
        const navItems = Object.keys(tagsGroup).map(key => ({
            title: key,
            itemId: '#' + key,
            subNav: tagsGroup[key].map(s => ({title: s.title, itemId: '#' + s.itemId}))
        }));

        console.log(navItems);

        return navItems;
    }

    function buildSideNav(api) {
        const path = api?.paths;
        const tagsGroup = {};
        for (const key in path) {
            for (const method in path[key]) {
                addToTags(tagsGroup, path[key][method], key + '_' + method);
            }
        }
        return convertForNav(tagsGroup);
    }

    function createAndGet(tagsGroup, tag) {
        tagsGroup[tag] = []
        return tagsGroup[tag];
    }

    function addToTags(tagsGroup, method, id) {
        const tags = method.tags ? method.tags : ["default"];
        for (const tag of tags) {
            const isAlreadyThere = tagsGroup.hasOwnProperty(tag);
            const tagRef = isAlreadyThere ? tagsGroup[tag] : createAndGet(tagsGroup, tag);
            tagRef.push({title: method.summary, itemId: id})
        }
    }

    const sideNav = buildSideNav(api);

    return (
        <Block backgroundColor={'backgroundSecondary'} width={'300px'}>
            <Navigation
                items={sideNav}
                activeItemId={activeItemId}
                onChange={({item}) =>
                    setActiveItemId(item.itemId)
                }
            />
        </Block>
    );
}

export default SideNavigation;
