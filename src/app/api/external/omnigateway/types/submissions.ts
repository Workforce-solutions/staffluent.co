// api/external/omnigateway/types/submissions.ts
export enum SubmissionType {
    QUOTE = 'quote',
    CONTACT = 'contact',
    REQUEST_DEMO = 'request_demo',
    OTHER = 'other'
}

export interface SubmissionFormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    content?: string;
    type: SubmissionType;
    metadata?: {
        timestamp: Date;
        ipHash: string;
        userAgent: string;
    };
}