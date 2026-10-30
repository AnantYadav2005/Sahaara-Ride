import mongoose, {Schema} from 'mongoose';

const BookingSchema=new Schema({
 customerName:{type:String,required:true,trim:true,maxlength:120},seniorName:{type:String,required:true,trim:true,maxlength:120},
 phone:{type:String,required:true,trim:true},emergencyContact:{type:String,required:true,trim:true},pickup:{type:String,required:true,trim:true,maxlength:300},
 destination:{type:String,required:true,trim:true,maxlength:300},date:{type:String,required:true},time:{type:String,required:true},service:{type:String,required:true},
 duration:{type:String,default:'90 minutes'},needs:{type:String,default:'',maxlength:1500},consent:{type:Boolean,required:true},status:{type:String,default:'Enquiry received'},
 bookingCode:{type:String,required:true,unique:true},createdAt:{type:Date,default:Date.now}
});
const UserSchema=new Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},passwordHash:{type:String,required:true},role:{type:String,enum:['customer','attendant','admin'],default:'customer'}},{timestamps:true});
const EnquirySchema=new Schema({name:String,contact:String,message:String,createdAt:{type:Date,default:Date.now}});
export const Booking=mongoose.models.Booking||mongoose.model('Booking',BookingSchema);
export const User=mongoose.models.User||mongoose.model('User',UserSchema);
export const Enquiry=mongoose.models.Enquiry||mongoose.model('Enquiry',EnquirySchema);
