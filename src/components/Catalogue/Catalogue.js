import { useEffect, useState } from "react";

import "./Catalogue.css";
import CatalogueCard from "./CatalogueCard";
import CatalogueSwitch from "./CatalogueSwitch";
import { getAllPosts, getUserPosts } from "../../services/data";

const Catalogue = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (props.type === "user") {
        const response = await getUserPosts();
        setPosts(response);
        return null;
      }
      const { results } = await getAllPosts();
      setPosts(results);
    }
    fetchData();
  }, [posts]);

  return (
    <section className="catagolue">
      <section className="catagolue-header">
        <CatalogueSwitch name="Екопътеки" category="eco" />
        <CatalogueSwitch name="Върхове" category="peak" />
        <CatalogueSwitch name="Хижи" category="hut" />
        <CatalogueSwitch name="Къмпинг" category="camp" />
      </section>
      <section className="catalogue-body">
        {posts.map((post) => (
          <CatalogueCard key={post.objectId} data={post} />
        ))}
      </section>
    </section>
  );
};

export default Catalogue;
