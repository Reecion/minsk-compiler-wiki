'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import MenuSearch from './sidebar_search'
import CreateMenuItem from './sidebar_item'
import s from './style.module.css'
import { SidebarContext } from '../contexts/sidebar_context'
import { menu_items, MenuItem } from '@/app/models/menu_items'
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from 'next/navigation'


interface Props {
  children?: ReactNode | ReactNode[];
}

const Sidebar = ({ children }: Props) => {
  const searchParams = useSearchParams()
  const urlEpisode = searchParams.get('episode')
  const { isOpen, toggleMenu } = useContext(SidebarContext);
  const [urlEp, setUrlEp] = useState(0);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([...menu_items]);

  const tryParse = (num: string | null) => {
    try {
      if (num != null) {
        const n = parseInt(num);
        return n;
      }
      return 0;
    } catch (err) {
      return 0;
    }
  }
  useEffect(() => {
    const tmp = tryParse(urlEpisode);
    setUrlEp(tmp);
    if (tmp != 0) {
      updateMenuItems('', tmp)
    }
  }, [])

  const filterByName = (item: MenuItem[], searchText: string): MenuItem[] => {
    return [...item.filter(e => {
      if (e.children != null) {
        const filteredElement = filterByName(e.children, searchText);
        if (filteredElement.length > 0) {
          let tmp = e;
          tmp.children = filteredElement;
          return tmp;
        }
      } else if (e.name.toLowerCase().includes(searchText.toLowerCase())) {
        return e;
      }
    })];
  }

  const filterByEpisode = (item: MenuItem, searchEpisode: number) => {
    if (item.episodes[0] <= searchEpisode) {
      if (item.episodes.length > 1) {
        // Always menu item not submenu
        if (item.episodes[1] >= searchEpisode) {
          if (item.url != undefined) {
            let new_item = JSON.parse(JSON.stringify(item));
            new_item.url += '?episode=' + searchEpisode;
            return new_item;
          }
          return item;
        }
      } else if (item.episodes[0] == 0) {
        // Submenu
        if (item.children != undefined) {
          const filtered_children = item.children.map((child) => filterByEpisode(child, searchEpisode)).filter(x => x != undefined);
          if (filtered_children.length > 0) {
            let new_item = JSON.parse(JSON.stringify(item));
            new_item.children = filtered_children;
            return new_item;
          }
        }
      }
    }
    return null;

    // const updatedUrls = items_copy.map((e: MenuItem) => {
    //   let e_copy = JSON.parse(JSON.stringify(e));
    //   if (e_copy.url != undefined) {
    //     e_copy.url = '?test';
    //   }

    //   return e_copy;
    // });
    // console.log(updatedUrls);
    // return items_copy;
  }

  const updateMenuItems = (searchText: string, episode: number = 0) => {
    const epItems = episode == 0 ? [...menu_items] : [...menu_items].map(
      (e) => filterByEpisode(e, episode)
    )?.filter((x) => x != undefined);

    let resItems = [...epItems];
    if (searchText != '') {
      let ep_copy = JSON.parse(JSON.stringify(epItems));
      resItems = filterByName(ep_copy, searchText)
    }
    setMenuItems(resItems);
  }

  return (
    <>
      <ul className={`${s.sidebar} new-scroll`} data-collapse={!isOpen} >
        <li><MenuSearch default_episode={urlEp} onChange={(t, e) => updateMenuItems(t, e)}></MenuSearch></li>
        {menuItems.map((item, index) => {
          if (item.name == "Spacer") {
            return (<hr key={`menu-${index}`} className='mb-1'></hr>);
          } else if (item.isLabel != undefined) {
            return (<span key={`menu-${index}`} className={s.menuLabel}>{item.name.toUpperCase()}</span>);
          }
          return (<CreateMenuItem
            item={item}
            index={index}
            key={'menu-' + index}
            prefix={'menu-'}
            indent={0}
          ></CreateMenuItem>)
        })}
      </ul>
      <div className={`${s.content} new-scroll`} data-collapse={!isOpen}>
        {children}
      </div>
    </>
  )
}

export default Sidebar
