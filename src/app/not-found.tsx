import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading1, Body, Caption } from "@/design-system/components/Typography";
import { FileX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
            <FileX className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Error Content */}
        <div className="space-y-4 mb-8">
          <Heading1 className="text-gray-900 dark:text-gray-100">
            Page Not Found
          </Heading1>
          
          <Body className="text-gray-600 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Body>
          
          <Caption className="text-gray-500 dark:text-gray-500">
            Error 404
          </Caption>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/dashboard">
              <Home className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Caption className="text-gray-500 dark:text-gray-500">
            Need help?{" "}
            <Link 
              href="/dashboard" 
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
            >
              Contact support
            </Link>
          </Caption>
        </div>
      </div>
    </div>
  );
}
