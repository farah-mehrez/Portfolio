import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Heart, Trophy, Star, Bolt, Users, Timer, 
  Droplets, Leaf, Edit, CheckCircle, ArrowLeft,
  Send, Target, Gift, Medal, Flame, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

interface Petition {
  id: number;
  title: string;
  description: string;
  signatures: number;
  goal: number;
  icon: typeof Droplets;
  gradient: string;
}

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  participants: number;
  daysLeft: number;
  difficulty: "easy" | "medium" | "hard";
}

interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  icon: typeof Gift;
  claimed: boolean;
}

const ActNow = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState(0);
  const [userPoints, setUserPoints] = useState(2450);
  const [signedPetitions, setSignedPetitions] = useState<Set<number>>(new Set());
  const [joinedChallenges, setJoinedChallenges] = useState<Set<number>>(new Set());
  const [claimedRewards, setClaimedRewards] = useState<Set<number>>(new Set());
  const [badges, setBadges] = useState(["🔥 Starter", "🌟 Activist"]);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  // Petition form state
  const [showPetitionForm, setShowPetitionForm] = useState(false);
  const [petitionForm, setPetitionForm] = useState({ title: "", description: "", goal: "" });

  // Challenge form state
  const [challengeProgress, setChallengeProgress] = useState<Record<number, number>>({});

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  const [petitions, setPetitions] = useState<Petition[]>([
    {
      id: 1,
      title: "Save Our Oceans",
      description: "Ban single-use plastics worldwide",
      signatures: 72000,
      goal: 100000,
      icon: Droplets,
      gradient: "from-luna-light to-luna-mid",
    },
    {
      id: 2,
      title: "Climate Action Now",
      description: "Plant 1M trees in urban areas",
      signatures: 58000,
      goal: 100000,
      icon: Leaf,
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      id: 3,
      title: "Clean Energy Future",
      description: "Transition to 100% renewable energy by 2030",
      signatures: 45000,
      goal: 75000,
      icon: Bolt,
      gradient: "from-amber-400 to-orange-500",
    },
  ]);

  const challenges: Challenge[] = [
    { id: 1, title: "30-Day Zero Waste", description: "Produce zero waste for 30 days", points: 500, participants: 2300, daysLeft: 15, difficulty: "hard" },
    { id: 2, title: "Meatless Monday", description: "Go vegetarian every Monday", points: 200, participants: 5600, daysLeft: 7, difficulty: "easy" },
    { id: 3, title: "Bike to Work Week", description: "Cycle instead of driving for a week", points: 350, participants: 1800, daysLeft: 10, difficulty: "medium" },
    { id: 4, title: "Digital Detox Weekend", description: "Reduce screen time to save energy", points: 150, participants: 3200, daysLeft: 3, difficulty: "easy" },
  ];

  const rewards: Reward[] = [
    { id: 1, title: "Eco Warrior Badge", description: "Exclusive profile badge", cost: 500, icon: Medal, claimed: false },
    { id: 2, title: "Plant a Tree", description: "We plant a tree in your name", cost: 1000, icon: Leaf, claimed: false },
    { id: 3, title: "Premium Membership", description: "1 month of premium features", cost: 2000, icon: Star, claimed: false },
    { id: 4, title: "Charity Donation", description: "$10 donated to environmental charity", cost: 2500, icon: Heart, claimed: false },
  ];

  const handleSignPetition = (id: number) => {
    if (!signedPetitions.has(id)) {
      setSignedPetitions(new Set([...signedPetitions, id]));
      setUserPoints(prev => prev + 50);
      setPetitions(prev => prev.map(p => 
        p.id === id ? { ...p, signatures: p.signatures + 1 } : p
      ));
      toast({
        title: "Petition Signed! 🎉",
        description: "+50 points earned! Your voice matters.",
      });
    }
  };

  const handleJoinChallenge = (id: number) => {
    if (!joinedChallenges.has(id)) {
      setJoinedChallenges(new Set([...joinedChallenges, id]));
      setChallengeProgress(prev => ({ ...prev, [id]: 0 }));
      toast({
        title: "Challenge Joined! 💪",
        description: "Good luck! Track your progress below.",
      });
    }
  };

  const handleUpdateProgress = (id: number, progress: number) => {
    setChallengeProgress(prev => ({ ...prev, [id]: progress }));
    if (progress >= 100) {
      const challenge = challenges.find(c => c.id === id);
      if (challenge) {
        setUserPoints(prev => prev + challenge.points);
        toast({
          title: "Challenge Completed! 🏆",
          description: `+${challenge.points} points earned!`,
        });
        if (badges.length < 3) {
          setBadges(prev => [...prev, "⚡ Champion"]);
        }
      }
    }
  };

  const handleClaimReward = (id: number, cost: number) => {
    if (userPoints >= cost && !claimedRewards.has(id)) {
      setClaimedRewards(new Set([...claimedRewards, id]));
      setUserPoints(prev => prev - cost);
      toast({
        title: "Reward Claimed! 🎁",
        description: "Check your profile for your new reward!",
      });
    } else if (userPoints < cost) {
      toast({
        title: "Not enough points",
        description: `You need ${cost - userPoints} more points.`,
        variant: "destructive",
      });
    }
  };

  const handleCreatePetition = (e: React.FormEvent) => {
    e.preventDefault();
    if (petitionForm.title && petitionForm.description && petitionForm.goal) {
      const newPetition: Petition = {
        id: petitions.length + 1,
        title: petitionForm.title,
        description: petitionForm.description,
        signatures: 1,
        goal: parseInt(petitionForm.goal),
        icon: Target,
        gradient: "from-purple-400 to-pink-500",
      };
      setPetitions(prev => [newPetition, ...prev]);
      setSignedPetitions(new Set([...signedPetitions, newPetition.id]));
      setUserPoints(prev => prev + 100);
      setPetitionForm({ title: "", description: "", goal: "" });
      setShowPetitionForm(false);
      toast({
        title: "Petition Created! 🚀",
        description: "+100 points for starting a movement!",
      });
    }
  };

  const tabs = [
    { icon: Home, label: "Home" },
    { icon: Heart, label: "Causes" },
    { icon: Trophy, label: "Challenges" },
    { icon: Star, label: "Rewards" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luna-darkest via-background to-luna-dark/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto pb-24">
        {/* Header */}
        <header className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Portfolio</span>
          </Link>
          
          <motion.div
            className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 rounded-full shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Bolt className="w-5 h-5 text-white" />
            <span className="text-white font-bold">{userPoints.toLocaleString()}</span>
          </motion.div>
        </header>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {selectedTab === 0 && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-6"
            >
              {/* Hero Card */}
              <motion.div
                className="bg-gradient-to-br from-luna-light via-luna-mid to-luna-dark p-6 rounded-3xl mb-6 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h1 className="text-3xl font-bold text-white mb-2">🚀 Change The World</h1>
                <p className="text-white/80 mb-6">Your actions create ripples of change</p>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                    <Edit className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white font-bold">{signedPetitions.size}</p>
                    <p className="text-white/70 text-xs">Petitions</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                    <Medal className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white font-bold">{badges.length}</p>
                    <p className="text-white/70 text-xs">Badges</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                    <TrendingUp className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white font-bold">Top 10%</p>
                    <p className="text-white/70 text-xs">Rank</p>
                  </div>
                </div>
              </motion.div>

              {/* Trending Section */}
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-foreground">🔥 Trending Now</h2>
                <motion.span
                  className="bg-destructive/20 text-destructive px-2 py-1 rounded-lg text-xs font-bold"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  HOT
                </motion.span>
              </div>

              {/* Petition Cards */}
              {petitions.slice(0, 2).map((petition) => {
                const Icon = petition.icon;
                const isSigned = signedPetitions.has(petition.id);
                const progress = (petition.signatures / petition.goal) * 100;

                return (
                  <motion.div
                    key={petition.id}
                    className={`bg-gradient-to-br ${petition.gradient} p-5 rounded-2xl mb-4 shadow-xl`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">{petition.title}</h3>
                        <p className="text-white/80 text-sm">{petition.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-white text-sm mb-2">
                        <span>{petition.signatures.toLocaleString()} signatures</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <Button
                      onClick={() => handleSignPetition(petition.id)}
                      disabled={isSigned}
                      className="w-full bg-white hover:bg-white/90 text-luna-dark font-bold"
                    >
                      {isSigned ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Signed! +50 pts
                        </>
                      ) : (
                        <>
                          <Edit className="w-4 h-4 mr-2" />
                          Sign Petition
                        </>
                      )}
                    </Button>
                  </motion.div>
                );
              })}

              {/* Challenge Spotlight */}
              <motion.div
                className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⚡</span>
                  <div className="flex-1">
                    <p className="text-white/70 text-xs font-bold tracking-wider">CHALLENGE SPOTLIGHT</p>
                    <h3 className="text-white font-bold text-xl">30-Day Zero Waste</h3>
                  </div>
                  <span className="bg-white text-orange-500 px-3 py-1 rounded-full font-bold text-sm">
                    +500 pts
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 bg-white/20 rounded-xl p-4">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white font-bold">2.3K</p>
                    <p className="text-white/70 text-xs">Participants</p>
                  </div>
                  <div className="text-center">
                    <Timer className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white font-bold">15</p>
                    <p className="text-white/70 text-xs">Days Left</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedTab === 1 && (
            <motion.div
              key="causes"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">All Causes</h2>
                <Button
                  onClick={() => setShowPetitionForm(!showPetitionForm)}
                  className="bg-primary hover:bg-primary/90"
                >
                  {showPetitionForm ? "Cancel" : "Create New"}
                </Button>
              </div>

              {/* Create Petition Form */}
              <AnimatePresence>
                {showPetitionForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleCreatePetition}
                    className="bg-card p-6 rounded-2xl mb-6 border border-border"
                  >
                    <h3 className="text-lg font-bold mb-4 text-foreground">Start Your Movement</h3>
                    <Input
                      placeholder="Petition Title"
                      value={petitionForm.title}
                      onChange={(e) => setPetitionForm(prev => ({ ...prev, title: e.target.value }))}
                      className="mb-3 bg-background"
                      required
                    />
                    <Textarea
                      placeholder="Describe your cause..."
                      value={petitionForm.description}
                      onChange={(e) => setPetitionForm(prev => ({ ...prev, description: e.target.value }))}
                      className="mb-3 bg-background"
                      required
                    />
                    <Input
                      type="number"
                      placeholder="Signature Goal (e.g., 10000)"
                      value={petitionForm.goal}
                      onChange={(e) => setPetitionForm(prev => ({ ...prev, goal: e.target.value }))}
                      className="mb-4 bg-background"
                      required
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-luna-light to-luna-mid text-luna-darkest">
                      <Send className="w-4 h-4 mr-2" />
                      Launch Petition (+100 pts)
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* All Petitions */}
              {petitions.map((petition) => {
                const Icon = petition.icon;
                const isSigned = signedPetitions.has(petition.id);
                const progress = (petition.signatures / petition.goal) * 100;

                return (
                  <motion.div
                    key={petition.id}
                    className={`bg-gradient-to-br ${petition.gradient} p-5 rounded-2xl mb-4 shadow-xl`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">{petition.title}</h3>
                        <p className="text-white/80 text-sm">{petition.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-white text-sm mb-2">
                        <span>{petition.signatures.toLocaleString()} / {petition.goal.toLocaleString()}</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2 bg-white/30" />
                    </div>

                    <Button
                      onClick={() => handleSignPetition(petition.id)}
                      disabled={isSigned}
                      className="w-full bg-white hover:bg-white/90 text-luna-dark font-bold"
                    >
                      {isSigned ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Signed! +50 pts
                        </>
                      ) : (
                        <>
                          <Edit className="w-4 h-4 mr-2" />
                          Sign Petition
                        </>
                      )}
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {selectedTab === 2 && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Active Challenges</h2>

              {challenges.map((challenge) => {
                const isJoined = joinedChallenges.has(challenge.id);
                const progress = challengeProgress[challenge.id] || 0;

                return (
                  <motion.div
                    key={challenge.id}
                    className="bg-card border border-border p-5 rounded-2xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-foreground font-bold text-lg">{challenge.title}</h3>
                        <p className="text-muted-foreground text-sm">{challenge.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        challenge.difficulty === "easy" ? "bg-emerald-500/20 text-emerald-400" :
                        challenge.difficulty === "medium" ? "bg-amber-500/20 text-amber-400" :
                        "bg-red-500/20 text-red-400"
                      }`}>
                        {challenge.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {challenge.participants.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer className="w-4 h-4" />
                        {challenge.daysLeft} days left
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        <Bolt className="w-4 h-4" />
                        +{challenge.points} pts
                      </span>
                    </div>

                    {isJoined ? (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Your Progress</span>
                          <span className="text-sm font-bold text-primary">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2 mb-3" />
                        <div className="flex gap-2">
                          {[25, 50, 75, 100].map((val) => (
                            <Button
                              key={val}
                              size="sm"
                              variant={progress >= val ? "default" : "outline"}
                              onClick={() => handleUpdateProgress(challenge.id, val)}
                              className="flex-1"
                            >
                              {val}%
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleJoinChallenge(challenge.id)}
                        className="w-full bg-gradient-to-r from-luna-light to-luna-mid text-luna-darkest font-bold"
                      >
                        <Flame className="w-4 h-4 mr-2" />
                        Join Challenge
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {selectedTab === 3 && (
            <motion.div
              key="rewards"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Reward Shop</h2>
                <p className="text-muted-foreground">You have <span className="text-primary font-bold">{userPoints.toLocaleString()}</span> points</p>
              </div>

              {/* Badges */}
              <div className="bg-card border border-border p-4 rounded-2xl mb-6">
                <h3 className="text-foreground font-bold mb-3">Your Badges</h3>
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, i) => (
                    <motion.span
                      key={i}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              {rewards.map((reward) => {
                const Icon = reward.icon;
                const isClaimed = claimedRewards.has(reward.id);
                const canAfford = userPoints >= reward.cost;

                return (
                  <motion.div
                    key={reward.id}
                    className={`bg-card border border-border p-5 rounded-2xl mb-4 ${
                      !canAfford && !isClaimed ? "opacity-60" : ""
                    }`}
                    whileHover={{ scale: canAfford || isClaimed ? 1.02 : 1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        isClaimed ? "bg-emerald-500/20" : "bg-primary/20"
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isClaimed ? "text-emerald-400" : "text-primary"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground font-bold">{reward.title}</h3>
                        <p className="text-muted-foreground text-sm">{reward.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-bold">{reward.cost.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">points</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleClaimReward(reward.id, reward.cost)}
                      disabled={isClaimed || !canAfford}
                      className={`w-full mt-4 ${
                        isClaimed 
                          ? "bg-emerald-500 hover:bg-emerald-500" 
                          : "bg-gradient-to-r from-luna-light to-luna-mid text-luna-darkest"
                      }`}
                    >
                      {isClaimed ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Claimed
                        </>
                      ) : (
                        <>
                          <Gift className="w-4 h-4 mr-2" />
                          Claim Reward
                        </>
                      )}
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        <motion.nav
          className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-luna-dark/90 to-luna-mid/90 backdrop-blur-xl px-2 py-2 rounded-full shadow-2xl border border-primary/30"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <div className="flex items-center gap-1">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = selectedTab === index;

              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all ${
                    isActive 
                      ? "bg-white/20 text-white" 
                      : "text-white/70 hover:text-white"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "w-6 h-6" : ""}`} />
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      className="font-medium text-sm"
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default ActNow;