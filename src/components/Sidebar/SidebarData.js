import React from "react";
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: "Ana Sayfa",
        icon: <FaIcons.FaHome />,
        link: "/"
    },
    {
        title: "Çalışanlar",
        icon: <FaIcons.FaUserAlt />,
        submenu: [
            {
                title: "Tüm Çalışanlar",
                icon: <FaIcons.FaWindowRestore />,
                link: "/calisanlar",
            },
            {
                title: "Yeni Çalışan",
                icon: <FaIcons.FaPlusSquare />,
                link: "/yeni-calisan",
            }
        ]
    },
    {
        title: "İzinler",
        icon: <FaIcons.FaListAlt />,
        submenu: [
            {
                title: "Tüm İzinler",
                icon: <FaIcons.FaWindowRestore />,
                link: "/izinler",
            },
            {
                title: "Yeni İzin",
                icon: <FaIcons.FaPlusSquare />,
                link: "/yeni-izin",
            }
        ]
    },
    {
        title: "Harcamalar",
        icon: <FaIcons.FaListAlt />,
        submenu: [
            {
                title: "Tüm Harcamalar",
                icon: <FaIcons.FaWindowRestore />,
                link: "/harcamalar",
            },
            {
                title: "Yeni Harcama",
                icon: <FaIcons.FaPlusSquare />,
                link: "/yeni-harcama",
            }
        ]
    }
]
