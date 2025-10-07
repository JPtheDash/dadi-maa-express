// Update this page (the content is just a fallback if you fail to update the page)

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { ChefHat, Users, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ChefHat className="h-16 w-16 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            Dadi Maa Express
          </h1>
          <p className="text-xl text-orange-600 max-w-2xl mx-auto">
            Connecting home cooks with food lovers. Authentic home-cooked meals delivered with love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Utensils className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-orange-800">For Home Cooks</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Are you a talented home cook? Join our community of "Dadi Maas" and share your delicious recipes with the world.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Easy setup for your home kitchen</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Manage your menu and orders</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Connect with food lovers in your area</span>
              </li>
            </ul>
            <Link to="/login">
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700"
                onClick={() => localStorage.setItem("userType", "kitchen")}
              >
                Become a Kitchen Partner
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-orange-800">For Food Lovers</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Discover authentic home-cooked meals from talented cooks in your neighborhood. Experience the taste of home.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fresh, home-cooked meals daily</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support local home cooks</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Customizable delivery times</span>
              </li>
            </ul>
            <Link to="/login">
              <Button 
                variant="outline" 
                className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                onClick={() => localStorage.setItem("userType", "customer")}
              >
                Order Delicious Meals
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <h4 className="font-bold text-lg mb-2">Sign Up</h4>
              <p className="text-orange-700">Create your account as a cook or customer</p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <h4 className="font-bold text-lg mb-2">Connect</h4>
              <p className="text-orange-700">Cooks list menus, customers browse and order</p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <h4 className="font-bold text-lg mb-2">Enjoy</h4>
              <p className="text-orange-700">Fresh home-cooked meals delivered to your door</p>
            </div>
          </div>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;