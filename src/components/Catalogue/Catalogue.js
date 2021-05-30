import { useEffect, useState } from "react";

import "./Catalogue.css";
import CatalogueCard from "./CatalogueCard";
import CatalogueSwitch from "./CatalogueSwitch";
import { getAllPosts, getUserPosts } from "../../services/data";

const Catalogue = (props) => {
  const [posts, setPosts] = useState([]);
  const [postsToRender, setPostsToRender] = useState([]);
  const [ecoSwitch, setEcoSwitch] = useState(true);
  const [peakSwitch, setPeakSwitch] = useState(true);
  const [hutSwitch, setHutSwitch] = useState(true);
  const [campSwitch, setCampSwitch] = useState(true);

  useEffect(() => {
    setPostsToRender(() => {
      let filteredPosts = posts;
      if (!ecoSwitch) {
        filteredPosts = filteredPosts.filter((post) => post.category !== "eco");
      }
      if (!peakSwitch) {
        filteredPosts = filteredPosts.filter((post) => post.category !== "peak");
      }
      if (!hutSwitch) {
        filteredPosts = filteredPosts.filter((post) => post.category !== "hut");
      }
      if (!campSwitch) {
        filteredPosts = filteredPosts.filter((post) => post.category !== "camp");
      }
      return filteredPosts;
    });
  }, [ecoSwitch, peakSwitch, hutSwitch, campSwitch]);

  useEffect(() => {
    async function fetchData() {
      if (props.type === "user") {
        const response = await getUserPosts();
        setPosts(response);
        setPostsToRender(response);
        return null;
      }
      const { results } = await getAllPosts();
      setPosts(results);
      setPostsToRender(results);
    }
    fetchData();
  }, [props.type]);
  return (
    <section className="catagolue">
      <section className="catagolue-header">
        <CatalogueSwitch onClick={() => setEcoSwitch(!ecoSwitch)} name="Екопътеки" category="eco" />
        <CatalogueSwitch onClick={() => setPeakSwitch(!peakSwitch)} name="Върхове" category="peak" />
        <CatalogueSwitch onClick={() => setHutSwitch(!hutSwitch)} name="Хижи" category="hut" />
        <CatalogueSwitch onClick={() => setCampSwitch(!campSwitch)} name="Къмпинг" category="camp" />
      </section>
      <section className="catalogue-body">
        {postsToRender.map((post) => (
          <CatalogueCard key={post.objectId} data={post} />
        ))}
      </section>
    </section>
  );
};

export default Catalogue;
