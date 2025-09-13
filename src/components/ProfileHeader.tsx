

const ProfileHeader = () => {
  return (
    <div className="text-center space-y-6 animate-float">
      <div className="relative">
        <div className="w-32 h-32 mx-auto rounded-full glass border-2 border-primary/30 p-2 animate-pulse-glow overflow-hidden">
          <img 
            src="/media/profile-avatar.png"
            alt="D1Goat0 profile avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      
      <div>
        <h1 className="text-5xl font-bold neon-text bg-gradient-primary bg-clip-text text-transparent">
          D1Goat0
        </h1>
        <p className="text-muted-foreground text-lg mt-2">
          Check out my socials
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;