import axios from "axios";
import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { IF, URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";

 const Home = () => {
  
  const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  // console.log(user)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()

  },[search])

  return (
    <>
      <Navbar />
      <main className="bg-white py-8 px-4 md:px-[200px] min-h-[80vh]"> {/* Added a main container for content */}
        {loader ? (
          <div className="h-[40vh] flex items-center justify-center">
            <Loader />
          </div>
        ) : !noResults ? (
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4"> {/* Grid layout for posts */}
            {posts.map((post) => (
              <Link
                to={`${user ? `/posts/post/${post._id}` : "/login"}`}
                key={post._id}
                className="group rounded-lg overflow-hidden shadow-md"
              > {/* Link styling */}
                <HomePosts post={post} />
              </Link>
            ))}
          </div>
        ) : (
          <h3 className="text-center font-bold mt-16 text-gray-600">No posts available</h3>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
