"use client";

import React from "react";
import { Home, User, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  userType: "customer" | "kitchen" | null;
}

const Header = ({ userType }: HeaderProps) => {
  return (
    <header className="bg-orange-100 border-b border-orange-200 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-orange-600" />
          <h1 className="text-2xl font-bold text-orange-800">Dadi Maa Express</h1>
        </div>
        
        <nav className="flex items-center space-x-4">
          {userType === "customer" && (
            <Link to="/customer">
              <Button variant="ghost" className="text-orange-700 hover:bg-orange-200">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Button>
            </Link>
          )}
          {userType === "kitchen" && (
            <Link to="/kitchen">
              <Button variant="ghost" className="text-orange-700 hover:bg-orange-200">
                <Home className="h-5 w-5 mr-2" />
                Dashboard
              </Button>
            </Link>
          )}
          <Link to="/login">
            <Button variant="ghost" className="text-orange-700 hover:bg-orange-200">
              <User className="h-5 w-5 mr-2" />
              {userType ? "Account" : "Login"}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;