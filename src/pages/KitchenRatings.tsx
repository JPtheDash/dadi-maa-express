"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

// Mock ratings data
const ratings = [
  {
    id: 1,
    customerName: "Rahul Kumar",
    customerImage: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Absolutely delicious! The dal makhani was perfect. Will definitely order again.",
    date: "2023-05-15"
  },
  {
    id: 2,
    customerName: "Priya Sharma",
    customerImage: "/placeholder.svg?height=40&width=40",
    rating: 4,
    comment: "Great food and timely delivery. The paneer was a bit salty but overall very good.",
    date: "2023-05-12"
  },
  {
    id: 3,
    customerName: "Amit Patel",
    customerImage: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Best home-cooked food I've had in years! The biryani was amazing.",
    date: "2023-05-10"
  },
  {
    id: 4,
    customerName: "Sneha Reddy",
    customerImage: "/placeholder.svg?height=40&width=40",
    rating: 4,
    comment: "Very tasty food. The packaging could be improved but the taste is excellent.",
    date: "2023-05-08"
  }
];

const KitchenRatings = () => {
  const averageRating = ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length;
  
  return (
    <div className="min-h-screen bg-orange-50 p-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-2">My Ratings</h1>
          <p className="text-orange-600">See feedback from your customers</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Overall Rating</CardTitle>
              <CardDescription>Based on {ratings.length} reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-5xl font-bold text-orange-600 mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-2xl ${i < Math.floor(averageRating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">Excellent</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Rating Distribution</CardTitle>
              <CardDescription>How customers rated your food</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = ratings.filter(r => r.rating === stars).length;
                  const percentage = (count / ratings.length) * 100;
                  
                  return (
                    <div key={stars} className="flex items-center">
                      <div className="w-12 text-sm font-medium">{stars} stars</div>
                      <div className="flex-1 mx-4">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-500 rounded-full" 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-10 text-sm text-right">{count}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ratings.map((rating) => (
              <Card key={rating.id}>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={rating.customerImage} alt={rating.customerName} />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{rating.customerName}</CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-lg ${i < rating.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">{rating.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{rating.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenRatings;