import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our App</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
          <CardDescription>Learn more about our company and mission</CardDescription>
        </CardHeader>
        <CardContent>
          <p>We are a cutting-edge tech company focused on creating innovative solutions for our clients.</p>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="mb-4">You've clicked the button {count} times</p>
        <Button onClick={() => setCount(count + 1)}>
          Click me!
        </Button>
      </div>
    </div>
  );
};

export default HomePage;