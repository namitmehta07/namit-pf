import { ArrowLeft, Instagram, Facebook, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const InstagramPostsPage = () => {
  const instagramPosts = [
    {
      id: 1,
      username: "techFest SLIET",
      profilePic: "https://i.ibb.co/nqCP5brL/profile-pic-1.png",
      imageUrl: "https://i.ibb.co/vxRr3B9B/post-image-1.jpg",
      caption: "Our latest IELTS workshop was a great success! #IELTS #Education",
    },
    {
      id: 2,
      username: "techFest SLIET",
      profilePic: "https://i.ibb.co/67y7kGGz/profile2.png",
      imageUrl: "https://i.ibb.co/C3CcC9yD/post-image-2.jpg",
      caption: "Preparing students for SAT with expert coaching. #SATprep #TestPrep",
    },
    {
      id: 3,
      username: "techFest SLIET",
      profilePic: "https://i.ibb.co/353g1X0/profile3.png",
      imageUrl: "https://i.ibb.co/XfC2krfz/post-image-3.jpg",
      caption: "Interactive social media graphics to engage students creatively.",
    },
    {
      id: 4,
      username: "sparkpointedu",
      profilePic: "https://i.ibb.co/d0JVB55f/profile4.png",
      imageUrl: "https://i.ibb.co/NnLCtmW0/post-image-4.jpg",
      caption: "Brand identity design that stands out. #branding #design",
    },
    {
      id: 5,
      username: "sparkpointedu",
      profilePic: "https://i.ibb.co/MxxLzSvT/profile5.png",
      imageUrl: "https://i.ibb.co/6cTdz2xQ/post-image-5.jpg",
      caption: "Promotional materials to boost your coaching center.",
    },
    {
      id: 6,
      username: "sparkpointedu",
      profilePic: "https://i.ibb.co/0R4sggRx/profile6.png",
      imageUrl: "https://i.ibb.co/0R4sggRx/post-image-6.jpg",
      caption: "Educational content designs for better learning engagement.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Instagram Posts</h1>
        </div>
      </header>

      {/* Instagram Posts Gallery */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest Instagram Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instagramPosts.map(post => (
            <div
              key={post.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.imageUrl}
                alt={`Post by ${post.username}`}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={post.profilePic}
                    alt={`${post.username} profile`}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-semibold text-primary">@{post.username}</span>
                </div>
                <p className="text-muted-foreground text-sm">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">Follow Us on Social Media</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/sparkpointedu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://facebook.com/sparkpointedu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://sparkpointedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-smooth"
            >
              <Globe className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramPostsPage;
