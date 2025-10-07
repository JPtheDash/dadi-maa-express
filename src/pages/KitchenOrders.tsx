"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { CheckCircle, Clock, User } from "lucide-react";

// Mock orders data
const initialOrders = [
  {
    id: 1,
    customerName: "Rahul Kumar",
    customerImage: "/placeholder.svg?height=40&width=40",
    items: 2,
    time: "12:30 PM",
    status: "pending",
    total: 300
  },
  {
    id: 2,
    customerName: "Priya Sharma",
    customerImage: "/placeholder.svg?height=40&width=40",
    items: 1,
    time: "1:15 PM",
    status: "confirmed",
    total: 150
  },
  {
    id: 3,
    customerName: "Amit Patel",
    customerImage: "/placeholder.svg?height=40&width=40",
    items: 3,
    time: "6:45 PM",
    status: "pending",
    total: 450
  }
];

const KitchenOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleConfirmOrder = (orderId: number) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: "confirmed" } 
        : order
    ));
    toast.success("Order confirmed successfully!");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "confirmed":
        return <Badge variant="default" className="bg-green-100 text-green-800">Confirmed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-2">My Orders</h1>
          <p className="text-orange-600">View and manage incoming orders</p>
        </div>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No orders yet</h3>
            <p className="text-gray-500">Orders from customers will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={order.customerImage} alt={order.customerName} />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{order.customerName}</CardTitle>
                        <CardDescription>{order.items} {order.items === 1 ? "meal" : "meals"}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(order.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{order.time}</span>
                    </div>
                    <p className="text-xl font-bold text-orange-600">₹{order.total}</p>
                  </div>
                  {order.status === "pending" && (
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => handleConfirmOrder(order.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Confirm Order
                    </Button>
                  )}
                  {order.status === "confirmed" && (
                    <Button variant="outline" className="w-full" disabled>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Order Confirmed
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KitchenOrders;