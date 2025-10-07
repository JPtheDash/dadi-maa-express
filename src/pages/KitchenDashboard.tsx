"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, FileText, Camera, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const KitchenDashboard = () => {
  const [setupComplete, setSetupComplete] = useState(false);
  
  const setupSteps = [
    {
      id: 1,
      title: "Get FSSAI Certificate",
      description: "Obtain your Food Safety and Standards Authority of India certification",
      icon: <FileText className="h-5 w-5" />,
      completed: false
    },
    {
      id: 2,
      title: "Click Kitchen Photo",
      description: "Upload a clear photo of your kitchen for verification",
      icon: <Camera className="h-5 w-5" />,
      completed: false
    },
    {
      id: 3,
      title: "Follow Hygiene Rules",
      description: "Ensure your kitchen follows all hygiene and safety guidelines",
      icon: <Shield className="h-5 w-5" />,
      completed: true
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-2">Kitchen Dashboard</h1>
          <p className="text-orange-600">Manage your home kitchen and orders</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/kitchen/menu">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-orange-100 p-2 rounded-lg mr-3">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </span>
                  My Menu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Add and manage your delicious dishes</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/kitchen/orders">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-orange-100 p-2 rounded-lg mr-3">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </span>
                  My Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">View and manage incoming orders</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/kitchen/ratings">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-orange-100 p-2 rounded-lg mr-3">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </span>
                  My Ratings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">See feedback from your customers</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
              Kitchen Setup Required
            </CardTitle>
            <CardDescription>
              Complete these steps to get your kitchen approved
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {setupSteps.map((step) => (
                <div key={step.id} className="flex items-start p-4 border rounded-lg bg-white">
                  <div className={`mr-4 mt-1 ${step.completed ? 'text-green-500' : 'text-orange-500'}`}>
                    {step.completed ? <CheckCircle className="h-6 w-6" /> : step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <Badge variant={step.completed ? "default" : "secondary"}>
                    {step.completed ? "Completed" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button 
                className="bg-orange-600 hover:bg-orange-700"
                onClick={() => setSetupComplete(true)}
              >
                Mark Setup as Complete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KitchenDashboard;