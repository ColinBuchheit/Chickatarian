import React from 'react';
import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="chicken-gradient text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-responsive-xl font-display font-bold mb-6 animate-fade-in">
              Welcome to Chickatarian! 🐔
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
              Your daily dose of chicken prices, fast food news, memes, and everything poultry. 
              Join the cluck revolution!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link href="/digest">
                <Button size="lg" variant="secondary" className="min-w-[200px]">
                  📰 Today's Digest
                </Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600">
                  🤖 Chat with ChickBot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-8 border-b border-neutral-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$3.49</div>
              <div className="text-sm text-neutral-600">Avg. Chicken Price/lb Today</div>
              <div className="text-xs text-green-600 mt-1">↗ +2.3% from yesterday</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">1,247</div>
              <div className="text-sm text-neutral-600">Poll Votes This Week</div>
              <div className="text-xs text-blue-600 mt-1">🔥 Spicy vs Mild debate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">523</div>
              <div className="text-sm text-neutral-600">Memes Shared Today</div>
              <div className="text-xs text-purple-600 mt-1">😂 Peak chicken humor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-display font-bold text-neutral-900 mb-4">
              Everything Chicken, All in One Place
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From daily price tracking to AI-powered chicken conversations, we've got every aspect of your poultry passion covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Daily Digest */}
            <Card hover clickable className="group">
              <Link href="/digest" className="block">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">📰</div>
                  <CardTitle>Daily Chicken Digest</CardTitle>
                  <CardDescription>
                    Stay updated with the latest chicken prices, industry news, and market trends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Today's Avg Price:</span>
                      <span className="font-semibold text-primary-600">$3.49/lb</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Trend:</span>
                      <span className="font-semibold text-green-600">📈 Rising</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hot Topic:</span>
                      <span className="font-semibold text-secondary-600">Popeyes vs KFC</span>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* ChickBot */}
            <Card hover clickable className="group">
              <Link href="/chat" className="block">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">🤖</div>
                  <CardTitle>ChickBot AI Assistant</CardTitle>
                  <CardDescription>
                    Your personal chicken expert. Ask about recipes, prices, restaurants, and more!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-neutral-100 rounded-lg p-3 text-sm">
                    <div className="text-neutral-500 mb-1">💬 Popular Questions:</div>
                    <div className="space-y-1 text-xs text-neutral-600">
                      <div>"Where's the cheapest wings?"</div>
                      <div>"Best spicy chicken recipe?"</div>
                      <div>"KFC vs Popeyes comparison?"</div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Polls */}
            <Card hover clickable className="group">
              <Link href="/polls" className="block">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">🗳️</div>
                  <CardTitle>
                    Polls & Debates
                    <span className="ml-2 px-2 py-1 text-xs font-bold text-white spicy-gradient rounded-full animate-pulse">
                      Hot
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Vote on chicken debates and see what the community thinks about the big questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3">
                    <div className="text-sm font-medium mb-2">🔥 Active Poll:</div>
                    <div className="text-sm text-neutral-700">"Which has better chicken sandwich?"</div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-primary-600">Chick-fil-A: 42%</span>
                      <span className="text-secondary-600">Popeyes: 58%</span>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Memes */}
            <Card hover clickable className="group">
              <Link href="/memes" className="block">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">😂</div>
                  <CardTitle>Chicken Memes</CardTitle>
                  <CardDescription>
                    The internet's best chicken memes, plus AI-generated content that'll make you cluck with laughter.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-neutral-100 rounded p-2 text-center">
                      <div className="text-lg mb-1">🐔</div>
                      <div>Daily Meme</div>
                    </div>
                    <div className="bg-neutral-100 rounded p-2 text-center">
                      <div className="text-lg mb-1">🎨</div>
                      <div>AI Generated</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 text-center">
                    523 memes shared today! 🔥
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Newsletter */}
            <Card hover clickable className="group">
              <Link href="/newsletter" className="block">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">📧</div>
                  <CardTitle>The Daily Cluck</CardTitle>
                  <CardDescription>
                    Get your daily chicken digest, polls, and memes delivered straight to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Subscribers:</span>
                      <span className="font-semibold text-primary-600">12,847</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Open Rate:</span>
                      <span className="font-semibold text-green-600">94.2%</span>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-2 text-xs text-center text-primary-700">
                      ✨ Next issue: Tomorrow 8:00 AM
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Price Tracker */}
            <Card hover clickable className="group">
              <Link href="/prices" className="block">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">📈</div>
                  <CardTitle>Price Tracker</CardTitle>
                  <CardDescription>
                    Real-time chicken prices from grocery stores and restaurants nationwide.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Grocery Avg:</span>
                      <span className="font-semibold">$3.49/lb</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Restaurant Avg:</span>
                      <span className="font-semibold">$12.99/meal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Best Deal:</span>
                      <span className="font-semibold text-green-600">Kroger $2.99</span>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

          </div>
        </div>
      </section>

      {/* Current Poll Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 border-2 border-primary-200">
              <CardHeader className="text-center">
                <CardTitle className="text-responsive-md">
                  🔥 Hot Debate: Which Chain Has the Best Chicken Sandwich?
                </CardTitle>
                <CardDescription className="text-lg">
                  The ultimate chicken sandwich showdown - cast your vote and see real-time results!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { name: 'Chick-fil-A', votes: 1247, percentage: 42, color: 'bg-yellow-400' },
                    { name: 'Popeyes', votes: 1721, percentage: 58, color: 'bg-red-400' },
                    { name: 'KFC', votes: 892, percentage: 30, color: 'bg-red-600' },
                    { name: 'McDonald\'s', votes: 634, percentage: 21, color: 'bg-yellow-500' },
                  ].map((option) => (
                    <div key={option.name} className="text-center">
                      <div className="text-lg font-semibold mb-2">{option.name}</div>
                      <div className={`h-2 ${option.color} rounded-full mb-2`} style={{ width: `${option.percentage}%`, minWidth: '20%' }}></div>
                      <div className="text-sm text-neutral-600">{option.votes} votes ({option.percentage}%)</div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/polls">
                    <Button size="lg" className="min-w-[200px]">
                      🗳️ Vote Now & See All Polls
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="chicken-gradient text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-responsive-lg font-display font-bold mb-4">
              Never Miss a Cluck! 📧
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 12,847 chicken lovers getting the Daily Cluck newsletter.
              Fresh content delivered every morning at 8 AM.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold">Daily Price Updates</div>
                  <div className="text-sm opacity-80">Market trends & deals</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🗳️</div>
                  <div className="font-semibold">Exclusive Polls</div>
                  <div className="text-sm opacity-80">Vote before anyone else</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">😂</div>
                  <div className="font-semibold">Premium Memes</div>
                  <div className="text-sm opacity-80">Newsletter-only content</div>
                </div>
              </div>
              <Link href="/newsletter">
                <Button size="xl" variant="secondary" className="min-w-[250px] shadow-lg">
                  📧 Subscribe to Daily Cluck
                </Button>
              </Link>
              <p className="text-sm opacity-80 mt-4">
                Free forever. Unsubscribe anytime. No spam, just clucks. 🐔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Footer Stats */}
      <section className="bg-neutral-100 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">
              Today's Chickatarian Stats 📊
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">1,247</div>
                <div className="text-sm text-neutral-600">Chickens Celebrated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-600">523</div>
                <div className="text-sm text-neutral-600">Memes Shared</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">94.2%</div>
                <div className="text-sm text-neutral-600">Happy Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">∞</div>
                <div className="text-sm text-neutral-600">Chicken Love</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}