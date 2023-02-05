import React from 'react';
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from './blog-card';
import './style.scss';

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
    <div className="blogs-content-wrapper">
    <BlogCard  user="Atul Patidar" date="01 Jan 2023" image={Blog1} title="Neque porro quisquam est qui dolorem " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "  />
    <BlogCard  user="Atul Patidar" date="07 Jan 2023" image={Blog2} title="Neque porro quisquam est qui dolorem " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "  />
    <BlogCard  user="Atul Patidar" date="15 Jan 2023" image={Blog3} title="Neque porro quisquam est qui dolorem " description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "  />
    </div>
    </Section>
  )
}

export default Blogs;
