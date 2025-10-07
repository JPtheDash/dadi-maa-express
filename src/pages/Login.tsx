"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [userType, setUserType] = useState<"customer" | "kitchen">("customer");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email && !phone) {
      toast.error("Please enter email or phone number");
      return;
    }
    
    if (!password) {
      toast.error("Please enter password");
      return;
    }
    
    // Default credentials check
    if (password === "admin") {
      if (userType === "kitchen") {
        localStorage.setItem("userType", "kitchen");
        navigate("/kitchen");
        toast.success("Welcome to your kitchen dashboard!");
      } else {
        localStorage.setItem("userType", "customer");
        navigate("/customer");
        toast.success("Welcome to Dadi Maa Express!");
      }
    } else {
      toast.error("Invalid credentials. Use 'admin' as password for demo.");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-orange-800">Welcome Back</CardTitle>
          <CardDescription className="text-orange-600">
            Login to your Dadi Maa Express account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>User Type</Label>
                <RadioGroup 
                  defaultValue="customer" 
                  onValueChange={(value) => setUserType(value as "customer" | "kitchen")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="customer" />
                    <Label htmlFor="customer">Customer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kitchen" id="kitchen" />
                    <Label htmlFor="kitchen">Kitchen</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Or Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-gray-500 text-center mt-4">
            Demo credentials: Use "admin" as password
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;