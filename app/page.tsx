'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  IndianRupee,
  Trophy,
  Wallet,
  Users,
  Star,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Gift,
  Clock,
  Sparkles,
  Flame,
  Shield,
  Target,
} from 'lucide-react';

const TEAMS = {
  CSK: {
    name: "Chennai Super Kings",
    logo: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=200&h=200&fit=crop",
    color: "from-yellow-500 to-orange-600",
    players: [
      { name: "MS Dhoni", role: "WK/C", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop", form: "Excellent" },
      { name: "Ravindra Jadeja", role: "All-rounder", image: "https://images.unsplash.com/photo-1624526267942-ab0c0e9ab345?w=100&h=100&fit=crop", form: "Good" },
      { name: "Ruturaj Gaikwad", role: "Batsman", image: "https://images.unsplash.com/photo-1624958736883-a857e0945e95?w=100&h=100&fit=crop", form: "Great" },
    ],
    fanImage: "https://images.unsplash.com/photo-1624958736883-a857e0945e95?w=800&h=400&fit=crop",
  },
  MI: {
    name: "Mumbai Indians",
    logo: "https://images.unsplash.com/photo-1624526267942-ab0c0e9ab345?w=200&h=200&fit=crop",
    color: "from-blue-500 to-blue-700",
    players: [
      { name: "Rohit Sharma", role: "C", image: "https://images.unsplash.com/photo-1624958736883-a857e0945e95?w=100&h=100&fit=crop", form: "Good" },
      { name: "Jasprit Bumrah", role: "Bowler", image: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=100&h=100&fit=crop", form: "Excellent" },
      { name: "Suryakumar Yadav", role: "Batsman", image: "https://images.unsplash.com/photo-1624526267942-ab0c0e9ab345?w=100&h=100&fit=crop", form: "Great" },
    ],
    fanImage: "https://images.unsplash.com/photo-1624526267942-ab0c0e9ab345?w=800&h=400&fit=crop",
  },
  RCB: {
    name: "Royal Challengers Bangalore",
    logo: "https://images.unsplash.com/photo-1624958736883-a857e0945e95?w=200&h=200&fit=crop",
    color: "from-red-600 to-red-800",
    players: [
      { name: "Virat Kohli", role: "Batsman", image: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=100&h=100&fit=crop", form: "Excellent" },
      { name: "Glenn Maxwell", role: "All-rounder", image: "https://images.unsplash.com/photo-1624526267942-ab0c0e9ab345?w=100&h=100&fit=crop", form: "Good" },
      { name: "Mohammed Siraj", role: "Bowler", image: "https://images.unsplash.com/photo-1624958736883-a857e0945e95?w=100&h=100&fit=crop", form: "Great" },
    ],
    fanImage: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=800&h=400&fit=crop",
  },
};

export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0f2e] via-[#31164a] to-[#4a1c6b]">
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[90vh] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=2000&h=1000&fit=crop")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f2e]/70 to-[#1a0f2e]" />
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative flex flex-col items-center justify-center h-full text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Trophy className="h-20 w-20 text-yellow-400 mb-4" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500">
            Fantasy Cricket Evolved
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Join millions of cricket fans and experience the future of fantasy gaming with AI-powered insights
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
              Start Playing Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <Flame className="h-8 w-8 text-orange-400 mb-2" />
            <h3 className="text-2xl font-bold text-white">1M+</h3>
            <p className="text-white/70">Active Players</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <Shield className="h-8 w-8 text-green-400 mb-2" />
            <h3 className="text-2xl font-bold text-white">₹10Cr+</h3>
            <p className="text-white/70">Prize Pool</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <Target className="h-8 w-8 text-blue-400 mb-2" />
            <h3 className="text-2xl font-bold text-white">99%</h3>
            <p className="text-white/70">Win Rate</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-indigo-900/95 backdrop-blur-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Trophy className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">And!Cricket</span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white">
                <Wallet className="mr-2 h-4 w-4" />
                ₹1,000
              </Button>
              <Button variant="secondary">Connect Wallet</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="matches" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 rounded-lg">
            <TabsTrigger value="matches" className="text-white">
              Match Day
            </TabsTrigger>
            <TabsTrigger value="teams" className="text-white">
              My Teams
            </TabsTrigger>
            <TabsTrigger value="wallet" className="text-white">
              Wallet
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="text-white">
              Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MatchCard
                team1="CSK"
                team2="MI"
                time="19:30"
                prize="₹10,00,000"
                entryFee="₹49"
                onJoin={() => setSelectedMatch('CSK vs MI')}
              />
              <MatchCard
                team1="RCB"
                team2="KKR"
                time="15:30"
                prize="₹5,00,000"
                entryFee="₹29"
                onJoin={() => setSelectedMatch('RCB vs KKR')}
              />
              <MatchCard
                team1="DC"
                team2="PBKS"
                time="20:00"
                prize="₹7,50,000"
                entryFee="₹39"
                onJoin={() => setSelectedMatch('DC vs PBKS')}
              />
            </div>
          </TabsContent>

          <TabsContent value="teams">
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 p-6 text-white">
                <h3 className="text-xl font-bold mb-4">My Active Teams</h3>
                <div className="space-y-4">
                  {Object.entries(TEAMS).map(([key, team]) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedTeam(key)}
                    >
                      <TeamCard
                        logo={team.logo}
                        name={team.name}
                        captain={team.players[0].name}
                        points={324}
                        rank={12}
                        color={team.color}
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wallet">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Wallet Balance</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">₹1,000</div>
                <div className="space-y-4">
                  <Button className="w-full">Add Money</Button>
                  <Button variant="outline" className="w-full">Withdraw</Button>
                </div>
              </Card>
              <Card className="bg-white/10 border-white/20 p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Transaction History</h3>
                <div className="space-y-4">
                  <TransactionItem
                    type="credit"
                    amount="500"
                    description="Contest Won - CSK vs MI"
                    date="2024-03-15"
                  />
                  <TransactionItem
                    type="debit"
                    amount="49"
                    description="Contest Entry - RCB vs KKR"
                    date="2024-03-14"
                  />
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card className="bg-white/10 border-white/20 p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Global Leaderboard</h3>
              <div className="space-y-4">
                <LeaderboardItem
                  rank={1}
                  name="Cricket Master"
                  points={1234}
                  winnings="₹50,000"
                  avatar="https://images.unsplash.com/photo-1624526267942-ab0c0e9ab345?w=100&h=100&fit=crop"
                />
                <LeaderboardItem
                  rank={2}
                  name="Fantasy King"
                  points={1198}
                  winnings="₹30,000"
                  avatar="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=100&h=100&fit=crop"
                />
                <LeaderboardItem
                  rank={3}
                  name="IPL Guru"
                  points={1156}
                  winnings="₹20,000"
                  avatar="https://images.unsplash.com/photo-1624958736883-a857e0945e95?w=100&h=100&fit=crop"
                />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Contest Join Dialog */}
      <Dialog open={!!selectedMatch} onOpenChange={() => setSelectedMatch(null)}>
        <DialogContent className="bg-indigo-950 text-white border-white/20">
          <DialogHeader>
            <DialogTitle>{selectedMatch}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 p-4">
                <div className="text-sm text-white/70">Prize Pool</div>
                <div className="text-xl font-bold text-yellow-400">₹10,00,000</div>
              </Card>
              <Card className="bg-white/10 border-white/20 p-4">
                <div className="text-sm text-white/70">Entry Fee</div>
                <div className="text-xl font-bold text-green-400">₹49</div>
              </Card>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">AI Insights</h4>
              <div className="bg-white/5 rounded-lg p-4 space-y-2">
                <div className="flex items-center text-blue-400">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Pitch favors spinners today</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span>Rohit Sharma in good form</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {selectedMatch?.split(' vs ').map((team) => {
                const teamData = TEAMS[team as keyof typeof TEAMS];
                if (!teamData) return null;
                return (
                  <Card key={team} className={`bg-gradient-to-br ${teamData.color} p-4 text-white`}>
                    <div className="flex items-center space-x-2 mb-3">
                      <img src={teamData.logo} alt={team} className="w-8 h-8 rounded-full" />
                      <span className="font-bold">{team}</span>
                    </div>
                    <div className="space-y-2">
                      {teamData.players.map((player) => (
                        <div key={player.name} className="flex items-center space-x-2">
                          <img src={player.image} alt={player.name} className="w-6 h-6 rounded-full" />
                          <span className="text-sm">{player.name}</span>
                          <span className="text-xs opacity-75">{player.role}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            <Button
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
              onClick={() => setSelectedMatch(null)}
            >
              Create Team
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Team Details Dialog */}
      <Dialog open={!!selectedTeam} onOpenChange={() => setSelectedTeam(null)}>
        <DialogContent className="bg-indigo-950 text-white border-white/20">
          <DialogHeader>
            <DialogTitle>Team Details</DialogTitle>
          </DialogHeader>
          {selectedTeam && TEAMS[selectedTeam as keyof typeof TEAMS] && (
            <div className="space-y-6">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={TEAMS[selectedTeam as keyof typeof TEAMS].fanImage}
                  alt="Team fans"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <img
                    src={TEAMS[selectedTeam as keyof typeof TEAMS].logo}
                    alt={selectedTeam}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{TEAMS[selectedTeam as keyof typeof TEAMS].name}</h3>
                    <p className="text-sm text-white/70">Founded 2008</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Squad</h4>
                <div className="grid grid-cols-2 gap-4">
                  {TEAMS[selectedTeam as keyof typeof TEAMS].players.map((player) => (
                    <Card key={player.name} className="bg-white/10 p-4">
                      <div className="flex items-center space-x-3">
                        <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-sm text-white/70">{player.role}</div>
                          <div className="text-sm text-green-400">Form: {player.form}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Recent Performance</h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Last 5 matches</span>
                    <div className="flex space-x-1">
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs">W</span>
                      <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">L</span>
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs">W</span>
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs">W</span>
                      <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MatchCard({ team1, team2, time, prize, entryFee, onJoin }: {
  team1: string;
  team2: string;
  time: string;
  prize: string;
  entryFee: string;
  onJoin: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-white/10 border-white/20 backdrop-blur-lg p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <img src={TEAMS[team1 as keyof typeof TEAMS]?.logo} alt={team1} className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">vs</span>
            <img src={TEAMS[team2 as keyof typeof TEAMS]?.logo} alt={team2} className="w-10 h-10 rounded-full" />
          </div>
          <div className="text-sm opacity-75">{time} IST</div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Trophy className="h-4 w-4 text-yellow-400 mr-2" />
              <span>Prize Pool</span>
            </div>
            <div className="font-bold text-yellow-400">{prize}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <IndianRupee className="h-4 w-4 text-green-400 mr-2" />
              <span>Entry</span>
            </div>
            <div className="font-bold text-green-400">{entryFee}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-blue-400 mr-2" />
              <span>Spots Left</span>
            </div>
            <div className="font-bold text-blue-400">1,234</div>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
            onClick={onJoin}
          >
            Join Contest
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function TeamCard({ logo, name, captain, points, rank, color }: {
  logo: string;
  name: string;
  captain: string;
  points: number;
  rank: number;
  color: string;
}) {
  return (
    <div className={`bg-gradient-to-r ${color} rounded-lg p-4 text-white`}>
      <div className="flex items-center space-x-4">
        <img src={logo} alt={name} className="w-16 h-16 rounded-full border-2 border-white/20" />
        <div>
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-sm text-white/70">Captain: {captain}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="font-semibold text-yellow-400">{points} pts</div>
          <div className="text-sm text-white/70">Rank #{rank}</div>
        </div>
      </div>
    </div>
  );
}

function TransactionItem({ type, amount, description, date }: {
  type: 'credit' | 'debit';
  amount: string;
  description: string;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
      <div>
        <div className="font-semibold">{description}</div>
        <div className="text-sm text-white/70">{date}</div>
      </div>
      <div className={`font-semibold ${type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
        {type === 'credit' ? '+' : '-'}₹{amount}
      </div>
    </div>
  );
}

function LeaderboardItem({ rank, name, points, winnings, avatar }: {
  rank: number;
  name: string;
  points: number;
  winnings: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-yellow-400">#{rank}</div>
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-white/70">{points} points</div>
        </div>
      </div>
      <div className="text-green-400 font-semibold">{winnings}</div>
    </div>
  );
}